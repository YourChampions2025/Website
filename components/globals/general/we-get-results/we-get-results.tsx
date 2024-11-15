import Link from "next/link";
import React from "react";
import { IoTriangle } from "react-icons/io5";
import styles from "./we-get-results.module.css";
import type { ResultProps } from "@/types/types";
import PortableTextComponent from "../portable-text-component/portable-text-component";
import classNames from "classnames";

interface WeGetResultsProps {
  results: ResultProps[];
}

export default function WeGetResults({ results }: WeGetResultsProps) {
  const mainResult = results[0];
  const otherResults = results.slice(1);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h2 className={styles.heading}>We Get Results</h2>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.gridContainer}>
          <div className={styles.resultContainer}>
            <div className={styles.resultContent}>
              <div className={styles.resultHeader}>
                <h3 className={styles.amount}>{mainResult.title}</h3>
              </div>

              <div className={styles.resultDetails}>
                <span className={styles.resultInfo}>
                  <span className={styles.grayText}>{mainResult.subtitle}</span>
                </span>

                {mainResult.content && (
                  <div
                    className={classNames(styles.description, "line-clamp-3")}
                  >
                    <PortableTextComponent content={mainResult.content} />
                  </div>
                )}
              </div>

              <Link href="/results" className={styles.link}>
                <IoTriangle className={styles.icon} />
                explore our case results
              </Link>
            </div>

            <div className={styles.imageContainer}>
              <img src="/images/we-get-results.png" alt="" />
            </div>
          </div>

          <div id="results-container" className={styles.resultsContainer}>
            {otherResults.map((result, index) => (
              <div key={index} className={styles.resultItem}>
                <div className={styles.resultItemHeader}>
                  <h3 className={styles.resultItemAmount}>{result.title}</h3>

                  <span className={styles.resultItemInfo}>
                    <span className={styles.grayText}>{result.subtitle}</span>
                  </span>
                </div>

                {result.content && (
                  <div
                    className={classNames(
                      styles.resultItemDescription,
                      "line-clamp-3"
                    )}
                  >
                    <PortableTextComponent content={result.content} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
