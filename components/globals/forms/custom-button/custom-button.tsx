import React from "react";
import styles from "./custom-button.module.css";
import classNames from "classnames";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: "small" | "medium";
  color?: "green" | "blue";
}

export default function CustomButton({
  children,
  size = "medium",
  color = "green",
  ...props
}: CustomButtonProps) {
  return (
    <button
      {...props}
      className={classNames(
        styles.buttonBase,
        styles[color],
        size === "small" ? styles.sizeSmall : styles.sizeMedium
      )}
    >
      {children}
    </button>
  );
}
