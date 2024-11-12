import React from "react";
import Image from "next/image";
import styles from "./home.strategies.module.css";
import strategies from "@/public/images/home-strategies-details.png";

function HomeStrategies() {
  return (
    <div className={styles.homeStrategiesContainer}>
      <div className={styles.homeStrategiesContent}>
        <div className={styles.homeStrategiesWrapper}>
          <Image alt="" src={strategies} className={styles.imageStrategies} />{" "}
          <div className={styles.textStrategies}>
            <h2>
              Our aggressive personal injury litigation strategies deliver
            </h2>
            <h2>
              results on the large complex cases other lawyers can't pursue.{" "}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeStrategies;
