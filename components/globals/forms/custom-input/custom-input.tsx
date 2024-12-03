"use client";
import classNames from "classnames";
import { useFormContext } from "react-hook-form";
import styles from "./custom-input.module.css";

interface CustomInputProps {
  name: string;
  label: string;
  isFullHeight?: boolean;
  backgroundColor?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
  type?: string;
  error?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  name,
  label,
  isFullHeight = false,
  backgroundColor = "#000",
  value,
  onChange,
  isRequired = true,
  type = "text",
  error: propError,
}) => {
  let formContext;
  try {
    formContext = useFormContext();
  } catch {
    formContext = null;
  }

  const register = formContext?.register;
  const contextError = formContext?.formState?.errors?.[name]?.message?.toString();
  const error = propError || contextError;
  const hasError = !!error;

  const borderEffect = hasError
    ? "border border-red-600"
    : "border border-[var(--champions-blue)] hover:border-[var(--champions-green)] focus:border-[var(--champions-green)] duration-300 ease-in-out";

  const borderClassName = classNames(
    `peer block w-full appearance-none pb-3 pl-5 pt-8 text-[clamp(18px,1.85vw,20px)] text-white focus:outline-none focus:ring-0`,
    borderEffect,
    isFullHeight && "h-full"
  );

  const inputProps = register 
    ? { ...register(name), value, onChange }
    : { name, value, onChange };

  return (
    <div
      className={styles.container}
      style={{ height: isFullHeight ? "100%" : "auto" }}
    >
      <div
        className={styles.inputWrapper}
        style={{ height: isFullHeight ? "100%" : "auto" }}
      >
        <input
          {...inputProps}
          type={type}
          className={borderClassName}
          style={{ backgroundColor }}
          placeholder=" "
        />
        <label className="uppercase scale-75 peer-focus:scale-75 pointer-events-none absolute left-5 top-2 z-10 origin-[0] transform text-[clamp(16px,2.5vw,20px)] text-white text-opacity-60 peer-focus:text-opacity-100 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 -translate-y-1 peer-focus:-translate-y-1 text-base">
          {label}
          {isRequired && <span className="text-red-600">*</span>}
        </label>
      </div>
      {hasError && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
};

export default CustomInput;
