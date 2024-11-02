import React from "react";
import styles from "./page-grid-layout.module.css";

interface PageGridLayoutProps {
  mainContent: React.ReactNode;
  sideContent: React.ReactNode;
}

export default function PageGridLayout({
  mainContent,
  sideContent,
}: PageGridLayoutProps) {
  return (
    <section className={styles.sectionBorder}>
      <div className={styles.gridContainer}>
        <div className={styles.mainContentWrapper}>
          <div className={styles.mainContentInner}>{mainContent}</div>
        </div>
        <div className={styles.sideContentWrapper}>
          <div className={styles.sideContentInner}>{sideContent}</div>
        </div>
      </div>
    </section>
  );
}
