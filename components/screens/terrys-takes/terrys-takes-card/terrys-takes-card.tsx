import React from "react";
import Link from "next/link";
import styles from "./terrys-takes-card.module.css";
import { RiArrowDropRightFill } from "react-icons/ri";
import LoadMoreDynamicData from "@/components/globals/general/load-more-dynamic-data/load-more-dynamic-data";

function TerrysTakesCard() {
  return (
    <div className={styles.terrysTakesCardContainer}>
      <div className={styles.terrysTakesCardContent}>
        <div className={styles.terrysTakesCard}>
          <span className={styles.date}>Apr 9, 2024</span>
          <p className={styles.header}>
            6th DCA, Terry's Takes, Premises Liability
          </p>
          <h2 className={styles.title}>Johnson & Krej Leasing, Inc.</h2>
          <h6 className={styles.description}>
            Plaintiff was shot in a brawl at an Orlando strip club. Plaintiff
            did not sue the club or the company hired to handle security for the
            club. Instead, he sued the property owner and his management
            company, which he used to collect rent...
          </h6>
          <Link href="" className={styles.linkDetails}>
            <RiArrowDropRightFill
              size={42}
              color="#1055C1"
              className={styles.arrowIcon}
            />
            learn more
          </Link>
        </div>

        <div className={styles.terrysTakesCard}>
          <span className={styles.date}>Apr 9, 2024</span>
          <p className={styles.header}>
            6th DCA, Terry's Takes, Premises Liability
          </p>{" "}
          <h2 className={styles.title}>Johnson & Krej Leasing, Inc.</h2>
          <h6 className={styles.description}>
            Plaintiff was shot in a brawl at an Orlando strip club. Plaintiff
            did not sue the club or the company hired to handle security for the
            club. Instead, he sued the property owner and his management
            company, which he used to collect rent...
          </h6>
          <div>link</div>
        </div>

        <div className={styles.terrysTakesCard}>
          <span className={styles.date}>Apr 9, 2024</span>
          <p className={styles.header}>
            6th DCA, Terry's Takes, Premises Liability
          </p>{" "}
          <h2 className={styles.title}>Johnson & Krej Leasing, Inc.</h2>
          <h6 className={styles.description}>
            Plaintiff was shot in a brawl at an Orlando strip club. Plaintiff
            did not sue the club or the company hired to handle security for the
            club. Instead, he sued the property owner and his management
            company, which he used to collect rent...
          </h6>
          <div>link</div>
        </div>
      </div>
      <LoadMoreDynamicData>load more</LoadMoreDynamicData>
    </div>
  );
}

export default TerrysTakesCard;
