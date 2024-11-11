import React from "react";
import styles from "./dynamic-data-prev-back-next-buttons.module.css";
import Link from "next/link";
import { formatDateForHref } from "@/utils/functions";
import classNames from "classnames";

interface DynamicDataPrevBackNextButtonsProps {
  type?: "blog" | "terrys-takes";
  prev?: {
    date?: string;
    slug: string;
    court?: string;
  };
  next?: {
    date?: string;
    slug: string;
    court?: string;
  };
}

export default function DynamicDataPrevBackNextButtons({
  type = "blog",
  prev,
  next,
}: DynamicDataPrevBackNextButtonsProps) {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {prev ? (
          <Link
            href={`/${type}/${type === "blog" && prev?.date ? formatDateForHref(prev?.date) : `jurisdictions/${prev?.court}`}/${prev?.slug}`}
            className={styles.prevNextLink}
          >
            prev post
          </Link>
        ) : (
          <div
            className={classNames(
              styles.prevNextLink,
              "cursor-not-allowed grayscale opacity-25"
            )}
          >
            prev post
          </div>
        )}
        <Link href={`/${type}`} className={styles.backLink}>
          back to {type === "blog" ? "Articles" : "Terry's Takes"}
        </Link>
        {next ? (
          <Link
            href={`/${type}/${type === "blog" && next?.date ? formatDateForHref(next?.date) : `jurisdictions/${next?.court}`}/${next?.slug}`}
            className={styles.prevNextLink}
          >
            next post
          </Link>
        ) : (
          <div
            className={classNames(
              styles.prevNextLink,
              "cursor-not-allowed grayscale opacity-25"
            )}
          >
            next post
          </div>
        )}
      </div>
    </div>
  );
}
