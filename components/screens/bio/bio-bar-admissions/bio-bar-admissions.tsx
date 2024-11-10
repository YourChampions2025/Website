import React from "react";
import styles from "./bio-bar-admissions.module.css";
function BioBarAdmissions() {
  return (
    <div className={styles.bioEducationContainer}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Bar Admissions</h2>
        <img alt="" src="/images/bio-details.svg" />
      </div>
      <h4 className={styles.description}>Florida</h4>
    </div>
  );
}

export default BioBarAdmissions;
