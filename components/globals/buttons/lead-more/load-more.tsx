import React from "react";
import styles from "./load-more.module.css";

interface LoadMoreButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  textButton: string;
}

function LoadMore({
  onClick,
  disabled,
  type,
  textButton,
}: LoadMoreButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={styles.loadMoreContainer}
    >
      {textButton}
    </button>
  );
}

export default LoadMore;
