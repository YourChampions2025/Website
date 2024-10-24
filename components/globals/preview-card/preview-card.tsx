import React from "react";
import Image from "next/image";
import styles from "./preview-card.module.css";
import cardlogo from "@/public/images/card-logo.svg";

interface PreviewCardProps {
  title: string;
  children: React.ReactNode;
}
function PreviewCard({ title, children }: PreviewCardProps) {
  return (
    <div className={styles.PreviewCardContainer}>
      <div className={styles.PreviewCardContent}>
        <div className={styles.PreviewCardHeader}>
          <h2 className={styles.PreviewCardTitle}>{title}</h2>
          <Image alt="" src={cardlogo} />
        </div>
        <div className={styles.PreviewCardDescription}>{children}</div>
      </div>
    </div>
  );
}

export default PreviewCard;
