"use client";
import React, { useState } from "react";
import styles from "./home-hero.module.css";
import { BiVolumeMute } from "react-icons/bi";
import { AiOutlineSound } from "react-icons/ai";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import CustomButton from "@/components/globals/forms/custom-button/custom-button";
import { TbReload } from "react-icons/tb";
import { useRouter } from "next/navigation";

interface HomeHeroProps {
  imageUrl?: string;
}

export default function HomeHero({
  imageUrl = "/images/contact-us-image.png",
}: HomeHeroProps) {
  const arrowCount = 3;
  const [isMuted, setIsMuted] = useState(true);
  const router = useRouter();

  function handleButtonResults() {
    router.push("/results");
  }

  const handleScrollToContactUs = () => {
    const contactUsSection = document.getElementById("contact-us");
    if (contactUsSection) {
      contactUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  function toggleMute() {
    setIsMuted(!isMuted);
  }
  return (
    <div className={styles.container}>
      <img src={imageUrl} alt="resources-slug-hero" className={styles.image} />
      <div className={styles.overlay} />

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h2 className={styles.heroTitle}>
            Fischer <span>Redavid</span>
          </h2>

          <div className={styles.subtitleContainer}>
            <h4 className={styles.heroSubtitle}>
              Uncommon. Unrelenting. Unapologetic.
            </h4>
            <div className={styles.subtitleDetails} />
          </div>

          <span className={styles.heroDescription}>
            We’re an aggressive team of powerful advocates with a single-minded
            goal. Uncompromised justice.
          </span>

          <div className={styles.buttonsContainer}>
            <CustomButton
              color="blue"
              size="small"
              onClick={handleScrollToContactUs}
            >
              Get in touch now
            </CustomButton>

            <button
              className={styles.buttonResults}
              onClick={handleButtonResults}
            >
              <p> Our Results</p>
              {[...Array(arrowCount)].map((_, index) => (
                <MdKeyboardDoubleArrowRight
                  key={index}
                  size={14}
                  color="#1055C1"
                />
              ))}
            </button>
          </div>

          <div className={styles.buttonsVideo}>
            <button className={styles.soundButton} onClick={toggleMute}>
              {isMuted ? (
                <BiVolumeMute size={20} />
              ) : (
                <AiOutlineSound size={20} />
              )}
            </button>
            <button className={styles.reloadButton}>
              <TbReload size={20} />
            </button>
          </div>

          <div className={styles.sliderContainer}>slider</div>
        </div>
      </div>
    </div>
  );
}
