"use client";
import React, { useRef, useState } from "react";
import styles from "./home-hero.module.css";
import CustomButton from "@/components/globals/forms/custom-button/custom-button";
import { TbReload } from "react-icons/tb";
import { BiVolumeMute } from "react-icons/bi";
import { AiOutlineSound } from "react-icons/ai";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";
import LogoSlider from "@/components/globals/general/logo-slider/logo-slider";
import LogoOne from "@/public/images/slider-home-one.png";
import LogoTwo from "@/public/images/slider-home-two.png";

const LOGOS_ONE = [LogoOne, LogoOne, LogoOne];
const LOGOS_TWO = [LogoTwo, LogoTwo, LogoTwo];

export default function HomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();
  const [isMuted, setIsMuted] = useState(true);

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
    if (videoRef.current) {
      const newMuteState = !videoRef.current.muted;
      videoRef.current.muted = newMuteState;
      setIsMuted(newMuteState);
    }
  }

  function handleReloadVideo() {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }

  return (
    <div className={styles.container}>
      <video
        ref={videoRef}
        src="https://cg-fischer-redavid.s3.us-east-1.amazonaws.com/fischerRedavid.mp4"
        className={styles.image}
        autoPlay
        muted
        loop
      />
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
              size="medium"
              onClick={handleScrollToContactUs}
            >
              Get in touch now
            </CustomButton>

            <button
              className={styles.buttonResults}
              onClick={handleButtonResults}
            >
              <p> Our Results</p>
              {[...Array(3)].map((_, index) => (
                <MdKeyboardDoubleArrowRight
                  key={index}
                  size={20}
                  color="#1055C1"
                  className="flex-shrink-0"
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
            <button className={styles.reloadButton} onClick={handleReloadVideo}>
              <TbReload size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-fit relative z-50 pointer-events-none">
        <LogoSlider logos={LOGOS_ONE} />
        <LogoSlider logos={LOGOS_TWO} reverseDirection />
      </div>
    </div>
  );
}
