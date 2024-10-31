"use client";
import classNames from "classnames";
import { useFormContext } from "react-hook-form";
import styles from "./custom-input.module.css";

interface CustomInputProps {
  name: string;
  label: string;
  // isRequired?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  name,
  label,
  // isRequired = true,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const hasError = !!errors[name]?.message;

  const borderEffect = hasError
    ? "border border-red-600"
    : "border border-transparent";

  const borderClassName = classNames(
    "peer block w-full appearance-none bg-[#1A1B21] pb-2 pl-2 pt-8 text-[clamp(18px,1.85vw,20px)] text-white focus:outline-none focus:ring-0",
    borderEffect
  );

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <input
          {...register(name)}
          type="text"
          className={borderClassName}
          placeholder=" "
        />
        <label className="scale-75 uppercase peer-focus:scale-75 md:scale-75 md:peer-focus:scale-75 pointer-events-none absolute left-2 top-2 z-10 origin-[0] -translate-y-6 transform text-[clamp(16px,2.5vw,20px)] text-white text-opacity-60 peer-focus:text-opacity-100 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-1 md:-translate-y-1 md:peer-focus:-translate-y-1">
          {label}
          {/* {isRequired && <span className="text-red-600">*</span>} */}
        </label>
      </div>
      {hasError && (
        <p className="mt-1 text-xs text-red-500">
          {errors[name]?.message?.toString()}
        </p>
      )}
    </div>
  );
};

export default CustomInput;
