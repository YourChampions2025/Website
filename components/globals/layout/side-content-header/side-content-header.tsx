import React from "react";
import styles from "./side-content-header.module.css";

interface SideContentHeaderProps {
  title: string;
  description?: string;
}

export default function SideContentHeader({
  title,
  description,
}: SideContentHeaderProps) {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src="/images/serviceContractFormImage.png"
        alt="Service Contract Form"
      />
      <h6 className={styles.title}>{title}</h6>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
