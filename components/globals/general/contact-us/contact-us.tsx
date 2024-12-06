"use client";

import React, { useRef, useState } from "react";
import ContactUsForm from "../../forms/contact-us-form/contact-us-form";
import styles from "./contact-us.module.css";
import classNames from "classnames";
import { BiVolumeMute } from "react-icons/bi";
import { AiOutlineSound } from "react-icons/ai";
import { TbReload } from "react-icons/tb";
import Image from "next/image";
import Vector from "@/public/images/contact-us-vector.svg";
import useMediaQuery from "@/hooks/useMediaQuery";
import ImageLogo9 from "@/public/images/home-logo-carousel-9.png";
import ImageLogo1 from "@/public/images/home-logo-carousel-1.png";

interface ContactUsProps {
  hasBorderTop?: boolean;
}

export default function ContactUs({ hasBorderTop }: ContactUsProps) {
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

  const isSmallScreen = useMediaQuery("(max-width: 800px)");

  return (
    <div className={styles.container} id="contact-us">
      <div
        className={classNames(styles.header, hasBorderTop && styles.borderTop)}
      >
        <div className={styles.headerContent}>
          <h2 className={styles.heading}>Contact Us</h2>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.gridContainer}>
          <Image src={Vector} alt="Vector" className={styles.vectorImage} />

          {isSmallScreen ? (
            <>
              <div
                className={styles.videoContainer}
                id="contact-us-media-query"
              >
                <div className={styles.buttonsVideo}>
                  <button className={styles.soundButton} onClick={toggleMute}>
                    {isMuted ? (
                      <BiVolumeMute size={24} />
                    ) : (
                      <AiOutlineSound size={24} />
                    )}
                  </button>
                  <button
                    className={styles.reloadButton}
                    onClick={handleReloadVideo}
                  >
                    <TbReload size={20} />
                  </button>
                </div>
                <video
                  ref={videoRef}
                  src="https://cg-fischer-redavid.s3.us-east-1.amazonaws.com/FischerRedavidContactUs.mp4"
                  className={styles.video}
                  autoPlay
                  playsInline
                  muted
                  loop
                />
              </div>
            </>
          ) : (
            <>
              <div className={styles.promiseContainer}>
                <div className={styles.promiseContent}>
                  <div className={styles.promiseDetails}>
                    <h6 className={styles.promiseTitle}>Our Promise</h6>

                    <div className={styles.promiseList}>
                      <p>
                        Aggressive Litigation. Honest Representation. Dedicated
                        Communication. Respect and Compassion.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={styles.videoContainer}
                  id="contact-us-media-query"
                >
                  <div className={styles.buttonsVideo}>
                    <button className={styles.soundButton} onClick={toggleMute}>
                      {isMuted ? (
                        <BiVolumeMute size={24} />
                      ) : (
                        <AiOutlineSound size={24} />
                      )}
                    </button>
                    <button
                      className={styles.reloadButton}
                      onClick={handleReloadVideo}
                    >
                      <TbReload size={20} />
                    </button>
                  </div>
                  <video
                    ref={videoRef}
                    src="https://cg-fischer-redavid.s3.us-east-1.amazonaws.com/FischerRedavidContactUs.mp4"
                    className={styles.video}
                    autoPlay
                    playsInline
                    muted
                    loop
                  />
                </div>
              </div>
            </>
          )}

          <div id="results-container" className={styles.resultsContainer}>
            <div className="flex gap-10 sm:gap-16 items-center mb-4">
              <Image
                src={ImageLogo9}
                alt="Top 100 Jury Verdicts"
                width={75}
                className="w-16"
              />
              <Image
                src={ImageLogo1}
                alt="Top 100 Jury Verdicts"
                width={75}
                className="w-16"
              />
              <Image
                src={ImageLogo9}
                alt="Top 100 Jury Verdicts"
                width={75}
                className="w-16"
              />
            </div>
            <div className="flex gap-10 sm:gap-16 items-center mb-4">
              {isSmallScreen ? (
                <div className="w-full flex flex-col gap-4 mb-4 relative z-10">
                  <h4 className={styles.headline}>
                    connect with fischer redavid
                  </h4>
                  <div className={styles.promiseList}>
                    <p>
                      Aggressive Litigation. Honest Representation. Dedicated
                      Communication. Respect and Compassion.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="w-full flex flex-col gap-4 mb-4 relative z-10">
                  <h4 className={styles.headline}>
                    connect with fischer redavid
                  </h4>
                </div>
              )}
            </div>
            <ContactUsForm />
          </div>
        </div>
      </div>
    </div>
  );
}
