import React from "react";
import styles from "./page-header.module.css";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className={styles.pageHeaderContainer}>
      <div className={styles.pageHeaderWrapper}>
        <h1 className={styles.pageHeaderTitle}>{title}</h1>
        {description && (
          <span className={styles.pageHeaderDescription}>{description}</span>
        )}
      </div>
    </div>
  );
}
