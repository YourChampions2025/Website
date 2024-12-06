import React from "react";
import styles from "./dark-gray-box-with-logo.module.css";
import logo from "@/public/images/logo-details.svg";
import Image from "next/image";
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
        <Image className={styles.logo} src={logo} alt="SVG Image" />
      </div>
      {children}
    </div>
  );
}
