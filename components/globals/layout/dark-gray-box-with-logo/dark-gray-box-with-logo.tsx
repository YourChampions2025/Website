import React from "react";
import styles from "./dark-gray-box-with-logo.module.css";

interface DarkGrayBoxWithLogoProps {
  title: string;
  children: React.ReactNode;
}

export default function DarkGrayBoxWithLogo({
  title,
  children,
}: DarkGrayBoxWithLogoProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h6 className={styles.title}>{title}</h6>
        <img
          className={styles.logo}
          src="/images/logo-details.svg"
          alt="SVG Image"
        />
      </div>
      {children}
    </div>
  );
}
