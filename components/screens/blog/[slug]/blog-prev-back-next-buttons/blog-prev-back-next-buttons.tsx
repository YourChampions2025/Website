import React from "react";
import styles from "./blog-prev-back-next-buttons.module.css";
import Link from "next/link";

export default function BlogPrevBackNextButtons() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Link href="#" className={styles.prevNextLink}>
          prev post
        </Link>
        <Link href="#" className={styles.backLink}>
          back to articles
        </Link>
        <Link href="#" className={styles.prevNextLink}>
          next post
        </Link>
      </div>
    </div>
  );
}
