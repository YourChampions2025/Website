import React from "react";
import styles from "./bio-education.module.css";

function BioEducation() {
  return (
    <div className={styles.bioEducationContainer}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Educations</h2>
        <img alt="" src="/images/bio-details.svg" />
      </div>
      <div className={styles.descriptionContainer}>
        <h6 className={styles.descriptionTitle}>Juris Doctorate</h6>
        <p className={styles.description}>University of Miami</p>
      </div>
    </div>
  );
}

export default BioEducation;
