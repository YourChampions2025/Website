import React from "react";
import styles from "./page-header.module.css";
import BreadCrumb from "../../general/bread-crumb/bread-crumb";
import Link from "next/link";

interface PageHeaderProps {
  title: string;
  description?: string;
  hasBreadCrumb?: boolean;
  link?: string;
  linkHref?: string;
}

export default function PageHeader({
  title,
  description,
  link,
  linkHref,
  hasBreadCrumb = false,
}: PageHeaderProps) {
  return (
    <div className={styles.pageHeaderContainer}>
      <div className={styles.pageHeaderWrapper}>
        <h1 className={styles.pageHeaderTitle}>{title}</h1>
        {description && (
          <span className={styles.pageHeaderDescription}>{description}</span>
        )}
        {link && linkHref && (
          <Link href={linkHref} className={styles.pageLinkDescription}>
            {link}
          </Link>
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
