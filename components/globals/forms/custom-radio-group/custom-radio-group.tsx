import { Radio, RadioGroup } from "@headlessui/react";
import classNames from "classnames";
import { useFormContext } from "react-hook-form";

interface CustomRadioGroupProps {
  label?: string;
  isRequired?: boolean;
  name: string;
  options: { label: string; value: string }[];
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
}

export default function CustomRadioGroup({
  label,
  isRequired = true,
  name,
  options,
  value: controlledValue,
  onChange: controlledOnChange,
  error: propError,
}: CustomRadioGroupProps) {
  let formContext;
  try {
    formContext = useFormContext();
  } catch {
    formContext = null;
  }

  const watch = formContext?.watch;
  const setValue = formContext?.setValue;
  const setError = formContext?.setError;
  const contextError = formContext?.formState?.errors?.[name]?.message?.toString();
  const error = propError || contextError;
  const hasError = !!error;

  const selectedValue = watch ? watch(name) : controlledValue;

  const handleChange = (val: string) => {
    if (setValue && setError) {
      setValue(name, val);
      setError(name, {
        type: "manual",
        message: "",
      });
    } else if (controlledOnChange) {
      controlledOnChange(val);
    }
  };

  return (
    <div className="w-full h-fit border border-[#083376] pt-8 pb-3 pl-5 relative">
      {label && (
        <label className="flex items-center justify-start gap-1 text-white/60 uppercase text-[calc(16px*0.75)] absolute top-2 left-5">
          {label} {isRequired && <span className="text-[#EE0505]">*</span>}
        </label>
      )}
      <RadioGroup
        value={selectedValue}
        onChange={handleChange}
      >
        <div className="flex mt-4 items-start gap-3 flex-wrap">
          {options.map((option) => (
            <Radio
              key={option.value}
              value={option.value}
              as="div"
              className="cursor-pointer"
            >
              {({ checked }) => (
                <div className="w-fit flex items-center gap-3">
                  <div
                    className={classNames(
                      "w-6 h-6 border border-white/30 flex items-center justify-center p-1"
                    )}
                  >
                    <div
                      className={classNames(
                        "transition-all bg-[#2DE046] duration-300 w-full h-full",
                        checked ? "scale-100" : "scale-0"
                      )}
                    />
                  </div>
                  <span className="text-[16px] tracking-[calc(16px*-0.02)] text-white">
                    {option.label}
                  </span>
                </div>
              )}
            </Radio>
          ))}
        </div>
      </RadioGroup>
      {hasError && (
        <p className="text-xs text-[#EE0505] mt-1">{error}</p>
      )}
    </div>
  );
}
