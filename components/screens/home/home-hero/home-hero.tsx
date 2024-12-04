"use client";
import React, { useRef, useState } from "react";
import styles from "./home-hero.module.css";
import CustomButton from "@/components/globals/forms/custom-button/custom-button";
import { TbReload } from "react-icons/tb";
import { BiVolumeMute } from "react-icons/bi";
import { AiOutlineSound } from "react-icons/ai";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import LogoSlider from "@/components/globals/general/logo-slider/logo-slider";
import Link from "next/link";

import ImageBadge1 from "@/public/images/about-us-slug-badge1.png";
import ImageBadge2 from "@/public/images/about-us-slug-badge2.png";
import ImageBadge3 from "@/public/images/about-us-slug-badge3.png";
import ImageBadge4 from "@/public/images/about-us-slug-badge4.png";
import ImageBadge5 from "@/public/images/about-us-slug-badge5.png";
import ImageBadge6 from "@/public/images/about-us-slug-badge6.png";
import ImageBadge7 from "@/public/images/about-us-slug-badge7.png";

import ImageLogo1 from "@/public/images/home-logo-carousel-1.png";
import ImageLogo2 from "@/public/images/home-logo-carousel-2.png";
import ImageLogo3 from "@/public/images/home-logo-carousel-3.png";
import ImageLogo4 from "@/public/images/home-logo-carousel-4.png";
import ImageLogo5 from "@/public/images/home-logo-carousel-5.png";
import ImageLogo6 from "@/public/images/home-logo-carousel-6.png";
import ImageLogo7 from "@/public/images/home-logo-carousel-7.png";
import ImageLogo8 from "@/public/images/home-logo-carousel-8.png";
import ImageLogo9 from "@/public/images/home-logo-carousel-9.png";

const LOGOS_ONE = [
  ImageBadge1,
  ImageBadge2,
  ImageBadge3,
  ImageBadge4,
  ImageBadge5,
  ImageBadge6,
  ImageBadge7,
];

const LOGOS_TWO = [
  ImageLogo1,
  ImageLogo2,
  ImageLogo6,
  ImageLogo3,
  ImageLogo7,
  ImageLogo4,
  ImageLogo8,
  ImageLogo5,
  ImageLogo9,
];

export default function HomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  function toggleMute() {
    if (videoRef.current) {
      const newMuteState = !videoRef.current.muted;
      videoRef.current.muted = newMuteState;
      setIsMuted(newMuteState);
    }
  }

  function handleReloadVideo() {
    if (videoRef.current) {
      videoRef.current.muted = true;
      setIsMuted(true);
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }
  return (
    <div className={styles.container}>
      <video
        ref={videoRef}
        src="https://cg-fischer-redavid.s3.us-east-1.amazonaws.com/fischerRedavid.mp4"
        className={styles.video}
        playsInline
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
            We are an{" "}
            <Link
              href="/about-us"
              className="underline hover:text-green-500 transition-all duration-300 ease-in-out"
            >
              aggressive team of powerful advocates
            </Link>{" "}
            with a single-minded goal:{" "}
            <span className="font-bold">uncompromised justice</span>.
          </span>

          <div className={styles.buttonsContainer}>
            <Link href="tel:8886940708">
              <CustomButton color="blue" size="medium">
                CALL NOW{" "}
              </CustomButton>
            </Link>
            <Link href="#contact-us">
              <button className={styles.buttonResults}>
                <p>GET IN TOUCH</p>
                {[...Array(3)].map((_, index) => (
                  <MdKeyboardDoubleArrowRight
                    key={index}
                    size={20}
                    color="#2de046"
                    className="flex-shrink-0"
                  />
                ))}
              </button>
            </Link>
          </div>

          <div className={styles.buttonsVideo}>
            <button className={styles.soundButton} onClick={toggleMute}>
              {isMuted ? (
                <BiVolumeMute size={24} />
              ) : (
                <AiOutlineSound size={24} />
              )}
            </button>
            <button className={styles.reloadButton} onClick={handleReloadVideo}>
              <TbReload size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-fit flex flex-col gap-8 relative z-50 pointer-events-none">
        <LogoSlider logos={LOGOS_ONE} />
        <LogoSlider logos={LOGOS_TWO} reverseDirection />
      </div>
    </div>
  );
}
