"use client";
import Link from "next/link";
import { links } from "./types";
import React, { useState } from "react";
import styles from "./practice-areas.module.css";
import { RiArrowDropRightFill } from "react-icons/ri";

interface PracticeAreasHeroProps {
  defaultVideoUrl?: string;
}

export default function PracticeAreasHero({
  defaultVideoUrl = "/videos/burn.mp4",
}: PracticeAreasHeroProps) {
  const [activeLabel, setActiveLabel] = useState(links[0].label);

  const activeItem = links.find((link) => link.label === activeLabel);
  const activeDescription = activeItem?.description;
  const videoUrl = activeItem?.videoUrl || defaultVideoUrl;

  return (
    <div className={styles.container}>
      <video
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
        className={styles.heroVideo}
      />
      <div className={styles.overlay} />

      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <h2 className={styles.aboutTitle}>
            What Kind of Case Do <span>You Have?</span>
          </h2>

          <div className={styles.heroDescriptionContainer}>
            <div className={styles.practiceAreasFirstContainer}>
              <div className={styles.firstContainerTitle}>
                <div />
                practice areas
              </div>
              <div className={styles.linkContainer}>
                {links.map((link, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveLabel(link.label)}
                    className={`${styles.link} ${
                      activeLabel === link.label ? styles.activeLink : ""
                    }`}
                  >
                    {link.label}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.containerSecondColumn}>
              <h2 className={styles.secondContainerTitle}>{activeLabel}</h2>
              <span className={styles.secondContainerDescription}>
                {activeDescription}
              </span>
              <Link href="/" className={styles.linkDetails}>
                <RiArrowDropRightFill
                  size={38}
                  color="#2DE046"
                  className={styles.arrowIcon}
                />
                learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
