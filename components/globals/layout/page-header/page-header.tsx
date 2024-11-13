import React from "react";
import styles from "./page-header.module.css";
import BreadCrumb from "../../general/bread-crumb/bread-crumb";

interface PageHeaderProps {
  title: string;
  description?: string;
  hasBreadCrumb?: boolean;
}

export default function PageHeader({
  title,
  description,
  hasBreadCrumb = false,
}: PageHeaderProps) {
  return (
    <div className={styles.pageHeaderContainer}>
      <div className={styles.pageHeaderWrapper}>
        <h1 className={styles.pageHeaderTitle}>{title}</h1>
        {description && (
          <span className={styles.pageHeaderDescription}>{description}</span>
        )}
      </div>
      {hasBreadCrumb && (
        <div className={styles.pageHeaderWrapper}>
          <BreadCrumb />
        </div>
      )}
    </div>
  );
}
