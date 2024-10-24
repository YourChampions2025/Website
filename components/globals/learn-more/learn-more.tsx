import React from "react";
import styles from "./learn-more.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// Import styles adicionais
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function LearnMore() {
  return (
    <div className={styles.learnMoreContainer}>
      <div className={styles.learnMoreContent}>
        <div className={styles.learnMoreHeader}>
          <h2 className={styles.learnMoreHeaderTitle}>learn more</h2>
        </div>

        <div className={styles.slidesContainer}>
          <div>hi</div>
        </div>
      </div>
    </div>
  );
}

export default LearnMore;
