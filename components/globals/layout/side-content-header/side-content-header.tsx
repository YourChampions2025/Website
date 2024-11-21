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
      <video
        src="https://cg-fischer-redavid.s3.us-east-1.amazonaws.com/FischerRedavidForAttorneys.mp4"
        autoPlay
        muted
        controls
        loop
        playsInline
      />
      <h6 className={styles.title}>{title}</h6>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
