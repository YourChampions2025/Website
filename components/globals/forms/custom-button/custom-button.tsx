import classNames from "classnames";
import React from "react";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: "small" | "medium";
}

const customButtonSize = {
  small: "w-fit h-fit px-6 py-2 text-[14px] tracking-[calc(14px*-0.02)]",
  medium: "w-fit h-fit px-12 py-4 text-[16px] tracking-[calc(16px*-0.02)]",
};

export default function CustomButton({
  children,
  size = "medium",
  ...props
}: CustomButtonProps) {
  return (
    <button
      {...props}
      className={classNames(
        "w-fit h-fit border bg-[#2DE0461A] border-[#2DE046] uppercase text-white font-medium",
        customButtonSize[size]
      )}
    >
      {children}
    </button>
  );
}
