import React from "react";
import styles from "./contact-us.module.css";
import contactUsImag from "@/public/images/contact-us-image.png";
import detailsContactUs from "@/public/images/details-contactus.svg";

import Image from "next/image";

function ContactUs() {
  return (
    <div className={styles.contactUsContainer}>
      <div className={styles.contactUsContent}>
        <div className={styles.contactUsHeader}>
          <h2>contact us</h2>
          <span className={styles.horizontalLine} />
        </div>

        <div className={styles.gridContainer}>
          <div className={styles.firstContainer}>
            <div className={styles.firstContent}>
              <h4>OUR PROMISE</h4>
              <p>Aggressive Litigation</p>
              <p>Honest Representation</p>
              <p>Dedicated Communication</p>
              <p>Respect and Compassion</p>
            </div>

            <Image
              alt=""
              src={contactUsImag}
              className={styles.imagePosition}
            />
          </div>

          <Image
            alt=""
            src={detailsContactUs}
            className={styles.detailsPosition}
          />
          <div className={styles.secondContainer}>
            <div>form</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
