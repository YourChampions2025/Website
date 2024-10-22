import React from "react";
import Image from "next/image";
import imageForm from "@/public/images/serviceContractFormImage.png";
import styles from "./service-contract.module.css";

function ServiceContractForm() {
  return (
    <div className={styles.serviceContractFormContainer}>
      <div className={styles.serviceContractFormContent}>
        <div className={styles.stickyContainer}>
          <Image
            src={imageForm}
            alt="Illustrative image for the registration form"
          />

          <div className={styles.textForm}>
            <h2>work with your legal champions</h2>
            <p>Free & Confidential Consultation</p>
          </div>
          <div>{/* Form component */}</div>
        </div>
      </div>
    </div>
  );
}

export default ServiceContractForm;
