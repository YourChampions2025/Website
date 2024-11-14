import Link from "next/link";
import React from "react";
import { IoTriangle } from "react-icons/io5";
import styles from "./we-get-results.module.css";

export default function WeGetResults() {
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
                <h3 className={styles.amount}>$11.9 MILLION</h3>
                <Link href="/results" className={styles.link}>
                  <IoTriangle className={styles.icon} />
                  explore our case results
                </Link>
              </div>

              <div className={styles.resultDetails}>
                <span className={styles.resultInfo}>
                  <span className={styles.greenText}>--x Offer</span> ($--K) /{" "}
                  <span className={styles.grayText}>Medical Negligence</span>
                </span>

                <p className={styles.description}>
                  Our law firm obtained a global settlement of $11.9 Million
                  from multiple at-fault parties, including corporations and
                  government agencies, for our client who was a pretrial
                  detainee in a county jail and the victim of medical negligence
                  and deliberate indifference to his serious medical needs in
                  violation of the Fourteenth Amendment.
                </p>
              </div>
            </div>

            <div className={styles.imageContainer}>
              <img src="/images/we-get-results.png" alt="" />
            </div>
          </div>

          <div id="results-container" className={styles.resultsContainer}>
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className={styles.resultItem}>
                <div className={styles.resultItemHeader}>
                  <h3 className={styles.resultItemAmount}>$11.9 MILLION</h3>

                  <span className={styles.resultItemInfo}>
                    <span className={styles.greenText}>--x Offer ($--K)</span>
                    <span className={styles.grayText}>Medical Negligence</span>
                  </span>
                </div>

                <p className={styles.resultItemDescription}>
                  Our law firm represented a family who suffered a life-altering
                  loss on Christmas Day. The patriarch of the family had
                  recently become a grandfather. When all the family gathered at
                  his house for Christmas festivities, he and his adult son ran
                  out to the local gas station to grab soda and chips.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
