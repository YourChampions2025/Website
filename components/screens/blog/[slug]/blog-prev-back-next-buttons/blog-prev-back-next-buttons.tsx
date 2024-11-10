import React from "react";
import styles from "./blog-prev-back-next-buttons.module.css";
import Link from "next/link";
import { formatDateForHref } from "@/utils/functions";

interface BlogPrevBackNextButtonsProps {
  prev?: {
    date: string;
    slug: string;
  };
  next?: {
    date: string;
    slug: string;
  };
}

export default function BlogPrevBackNextButtons({
  prev,
  next,
}: BlogPrevBackNextButtonsProps) {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {prev ? (
          <Link
            href={`/blog/${formatDateForHref(prev?.date)}/${prev?.slug}`}
            className={styles.prevNextLink}
          >
            prev post
          </Link>
        ) : (
          <div className={styles.prevNextLink}></div>
        )}
        <Link href="/blog" className={styles.backLink}>
          back to articles
        </Link>
        {next ? (
          <Link
            href={`/blog/${formatDateForHref(next?.date)}/${next?.slug}`}
            className={styles.prevNextLink}
          >
            next post
          </Link>
        ) : (
          <div className={styles.prevNextLink}></div>
        )}
      </div>
    </div>
  );
}
