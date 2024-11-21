import React from "react";
import styles from "./about-us-hero.module.css";
import LogoSlider from "@/components/globals/general/logo-slider/logo-slider";
import ImageBadge1 from "@/public/images/about-us-slug-badge1.png";
import ImageBadge2 from "@/public/images/about-us-slug-badge2.png";
import ImageBadge3 from "@/public/images/about-us-slug-badge3.png";
import ImageBadge4 from "@/public/images/about-us-slug-badge4.png";
import ImageBadge5 from "@/public/images/about-us-slug-badge5.png";
import ImageBadge6 from "@/public/images/about-us-slug-badge6.png";
import ImageBadge7 from "@/public/images/about-us-slug-badge7.png";

const LOGOS_ONE = [
  ImageBadge1,
  ImageBadge2,
  ImageBadge3,
  ImageBadge4,
  ImageBadge5,
  ImageBadge6,
  ImageBadge7,
];

export default function AboutUsHero() {
  return (
    <div className={styles.container}>
      <video
        src="https://cg-fischer-redavid.s3.us-east-1.amazonaws.com/fischerRedavid.mp4"
        className={styles.image}
        playsInline
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

      <div className="w-full py-14 h-fit relative z-50 pointer-events-none">
        <LogoSlider logos={LOGOS_ONE} />
      </div>
    </div>
  );
}
