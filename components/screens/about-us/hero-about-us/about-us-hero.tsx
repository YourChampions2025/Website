import React from "react";
import styles from "./about-us-hero.module.css";
import LogoOne from "@/public/images/slider-home-one.png";
import LogoSlider from "@/components/globals/general/logo-slider/logo-slider";

const LOGOS_ONE = [LogoOne, LogoOne, LogoOne];

export default function AboutUsHero() {
  return (
    <div className={styles.container}>
      <video
        src="/videos/home-hero.mp4"
        className={styles.image}
        autoPlay
        muted
        loop
      />
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

      <div className="w-full h-fit relative z-50 pointer-events-none">
        <LogoSlider logos={LOGOS_ONE} />
      </div>
    </div>
  );
}
