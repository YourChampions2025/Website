"use client";
import React, { useRef, useState } from "react";
import styles from "./home-content-switcher.module.css";
import { BiVolumeMute } from "react-icons/bi";
import { TbReload } from "react-icons/tb";
import { AiOutlineSound } from "react-icons/ai";

function ContentSwitcher() {
  const [selectedContent, setSelectedContent] = useState<
    "clients" | "attorneys"
  >("clients");

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
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
    <div className={styles.contentSwitcherContainer}>
      <div className={styles.contentSwitcherContent}>
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.buttonSwitch} ${
              selectedContent === "clients" ? styles.active : ""
            }`}
            onClick={() => setSelectedContent("clients")}
          >
            for Clients
          </button>
          <button
            className={`${styles.buttonSwitch} ${
              selectedContent === "attorneys" ? styles.active : ""
            }`}
            onClick={() => setSelectedContent("attorneys")}
          >
            for Attorneys
          </button>
        </div>
        <div className={styles.contentDisplay}>
          {selectedContent === "clients" ? (
            <div className={styles.contentWrapper}>
              <div>
                <video
                  ref={videoRef}
                  src="https://cg-fischer-redavid.s3.us-east-1.amazonaws.com/FisherRedavidCustomers.mp4"
                  className={styles.imageContainer}
                  autoPlay
                  muted
                  loop
                />

                <div className={styles.buttonsVideo}>
                  <button className={styles.soundButton} onClick={toggleMute}>
                    {isMuted ? (
                      <BiVolumeMute size={20} />
                    ) : (
                      <AiOutlineSound size={20} />
                    )}
                  </button>
                  <button
                    className={styles.reloadButton}
                    onClick={handleReloadVideo}
                  >
                    <TbReload size={20} />
                  </button>
                </div>
              </div>

              <div className={styles.textsContainer}>
                <h2 className={styles.titleSwitch}>
                  We don’t follow a <span>one-size-fits-all playbook.</span>
                </h2>
                <h6 className={styles.descriptionSwitch}>
                  We have a deep bench and our personal injury team is stacked
                  with interdisciplinary talent. We constantly explore new ways
                  to tackle complex legal challenges. We leverage cutting-edge
                  technology and employ creative trial strategies to stay ahead
                  of the curve and maximize your results.
                </h6>
                <button
                  className={styles.homeAboutButton}
                  onClick={handleScrollToContactUs}
                >
                  Get in touch now{" "}
                </button>{" "}
              </div>
            </div>
          ) : (
            <div className={styles.contentWrapper}>
              <div>
                <video
                  ref={videoRef}
                  src="https://cg-fischer-redavid.s3.us-east-1.amazonaws.com/FischerRedavidForAttorneys.mp4"
                  className={styles.imageContainer}
                  autoPlay
                  muted
                  loop
                />
                <div className={styles.buttonsVideo}>
                  <button className={styles.soundButton} onClick={toggleMute}>
                    {isMuted ? (
                      <BiVolumeMute size={20} />
                    ) : (
                      <AiOutlineSound size={20} />
                    )}
                  </button>
                  <button
                    className={styles.reloadButton}
                    onClick={handleReloadVideo}
                  >
                    <TbReload size={20} />
                  </button>
                </div>
              </div>

              <div className={styles.textsContainer}>
                <h2 className={styles.titleSwitch}>
                  We don’t just stand out from other personal injury{" "}
                  <span>firms—we set the standard.</span>
                </h2>
                <h6 className={styles.descriptionSwitch}>
                  When complex or high-stakes personal injury cases arise, we’re
                  the team other attorneys rely on for guidance, collaboration,
                  or to take over entirely. Why? Because we deliver what many
                  others can't. We’re impossible to beat.
                </h6>
                <button
                  className={styles.homeAboutButton}
                  onClick={handleScrollToContactUs}
                >
                  Get in touch now{" "}
                </button>{" "}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContentSwitcher;
