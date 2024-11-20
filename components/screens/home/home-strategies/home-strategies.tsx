import React from "react";
import Image from "next/image";
import styles from "./home.strategies.module.css";
import strategies from "@/public/images/home-strategies-details.png";

function HomeStrategies() {
  return (
    <div className={styles.homeStrategiesContainer}>
      <div className={styles.homeStrategiesContent}>
        <div className={styles.homeStrategiesWrapper}>
          <Image
            alt="Vector"
            src={strategies}
            className={styles.imageStrategies}
          />{" "}
          <div className={styles.textStrategies}>
            <h2>We deliver what other attorneys can't.</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeStrategies;
