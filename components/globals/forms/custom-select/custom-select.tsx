"use client";
import classNames from "classnames";
import styles from "./custom-select.module.css";
import { BiChevronDown, BiX } from "react-icons/bi";

interface CustomSelectProps {
  label: string;
  placeholder?: string;
  options: {
    value: string;
    label: string;
  }[];
  isFullHeight?: boolean;
  backgroundColor?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onClear?: () => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  placeholder = "Click to select",
  options,
  isFullHeight = false,
  backgroundColor = "#1A1B21",
  value,
  onChange,
  onClear,
}) => {
  const selectClassName = classNames(
    `peer block w-full appearance-none pb-2 pl-2 pt-8 text-[clamp(18px,1.85vw,20px)] text-white focus:outline-none focus:ring-0`,
    isFullHeight && "h-full"
  );

  return (
    <div
      className={styles.container}
      style={{ height: isFullHeight ? "100%" : "auto" }}
    >
      <div
        className={styles.inputWrapper}
        style={{ height: isFullHeight ? "100%" : "auto" }}
      >
        <select
          className={selectClassName}
          style={{ backgroundColor }}
          defaultValue=""
          value={value}
          onChange={onChange}
        >
          {[
            {
              value: "",
              label: placeholder,
            },
            ...options,
          ].map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="text-black"
            >
              {option.label}
            </option>
          ))}
        </select>
        <label className="uppercase scale-75 peer-focus:scale-75 pointer-events-none absolute left-2 top-2 z-10 origin-[0] transform text-[clamp(16px,2.5vw,20px)] text-white text-opacity-60 peer-focus:text-opacity-100 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-1 -translate-y-1">
          {label}
        </label>
        <span className="absolute right-4 bottom-6 z-50 text-white">
          <BiChevronDown size={32} />
        </span>
        {value && (
          <span
            className="absolute right-[calc(16px+32px)] bottom-6 z-50 text-white cursor-pointer"
            onClick={onClear}
          >
            <BiX size={32} />
          </span>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;
