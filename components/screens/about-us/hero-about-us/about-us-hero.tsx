import React from "react";
import styles from "./about-us-hero.module.css";

interface AboutUsHeroProps {
  imageUrl?: string;
}

export default function AboutUsHero({
  imageUrl = "/images/contact-us-image.png",
}: AboutUsHeroProps) {
  return (
    <div className={styles.container}>
      <img src={imageUrl} alt="resources-slug-hero" className={styles.image} />
      <div className={styles.overlay} />

      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <h2 className={styles.aboutTitle}>
            About <span>Us</span>
          </h2>
          <p className={styles.aboutDescription}>
            Meet our firm, our attorneys and staff
          </p>
        </div>
      </div>
    </div>
  );
}
