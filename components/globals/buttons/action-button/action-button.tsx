import React from "react";
import styles from "./action-button.module.css";

interface actionButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}
function ActionButton({ label, disabled, onClick, type }: actionButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles.button}
    >
      {label}
    </button>
  );
}

export default ActionButton;
