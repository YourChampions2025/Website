import React from "react";
import Image from "next/image";
import imageAbout from "@/public/images/home-about.png";
import styles from "./home-about-us.module.css";

function HomeAboutUs() {
  return (
    <div className={styles.homeAboutUsContainer}>
      <div className={styles.homeAboutUsContent}>
        <Image alt="" src={imageAbout} />

        <div className={styles.homeAboutUsText}>
          <div className={styles.aboutUs}>
            <span className={styles.bullet} />
            <p>about us</p>
          </div>
          <h2 className={styles.title}>We Disrupt the Status Quo.</h2>

          <p className={styles.description}>
            We challenge traditional legal strategies to deliver justice for
            you. We take on the toughest cases with agile and aggressive tactics
            that put your needs at the forefront. With us, you won’t just get a
            lawyer; you’ll get a fearless legal partner who is committed to
            changing the outcome of your case—and your life. - John Fischer &
            Jordan Redavid
          </p>

          <button className={styles.homeAboutButton}>
            Meet Fischer Redavid
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeAboutUs;
