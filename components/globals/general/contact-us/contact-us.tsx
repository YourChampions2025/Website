import React from "react";
import ContactUsForm from "../../forms/contact-us-form/contact-us-form";
import styles from "./contact-us.module.css";
import classNames from "classnames";

interface ContactUsProps {
  hasBorderTop?: boolean;
}

export default function ContactUs({ hasBorderTop }: ContactUsProps) {
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
          <img
            src="/images/contact-us-vector.svg"
            alt="Vector"
            className={styles.vectorImage}
          />

          <div className={styles.promiseContainer}>
            <div className={styles.promiseContent}>
              <div className={styles.promiseDetails}>
                <h6 className={styles.promiseTitle}>Our Promise</h6>

                <div className={styles.promiseList}>
                  <p>Aggressive Litigation</p>
                  <p>Honest Representation</p>
                  <p>Dedicated Communication</p>
                  <p>Respect and Compassion</p>
                </div>
              </div>
            </div>

            <div className={styles.imageContainer}>
              <img src="/images/contact-us-image.png" alt="" />
            </div>
          </div>

          <div id="results-container" className={styles.resultsContainer}>
            <ContactUsForm />
          </div>
        </div>
      </div>
    </div>
  );
}
