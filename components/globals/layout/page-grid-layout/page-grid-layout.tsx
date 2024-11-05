import React from "react";
import styles from "./page-grid-layout.module.css";

interface PageGridLayoutProps {
  mainContent: React.ReactNode;
  sideContent: React.ReactNode;
  reverseLayout?: boolean;
}

export default function PageGridLayout({
  mainContent,
  sideContent,
  reverseLayout = false,
}: PageGridLayoutProps) {
  return (
    <section className={styles.sectionBorder}>
      <div
        className={`${styles.gridContainer} ${reverseLayout ? styles.reverse : ""}`}
      >
        <div className={styles.mainContentWrapper}>
          <div className={styles.mainContentInner}>{mainContent}</div>
        </div>
        <div className={styles.sideContentWrapper}>
          <div
            className={`${styles.sideContentInner} ${
              reverseLayout ? styles.sideContentInnerReverse : ""
            }`}
          >
            {sideContent}
          </div>
        </div>
      </div>
    </section>
  );
}
