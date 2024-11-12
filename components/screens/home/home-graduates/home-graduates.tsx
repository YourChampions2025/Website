import React from "react";
import Image from "next/image";
import styles from "./home-graduates.module.css";
import graduatesImage from "@/public/images/homee-graduates-details.png";

function HomeGraduates() {
  return (
    <div className={styles.homeGraduatesContainer}>
      <div className={styles.homeGraduatesContent}>
        <div className={styles.homeGraduatesWrapper}>
          <div className={styles.textGraduates}>
            <h2>
              our attorneys are licensed in <span>FL, GA, USVI, MA, CA</span>{" "}
            </h2>
            <h2>
              we also have COOffices in <span>FL, GA, USVI</span>{" "}
            </h2>
          </div>
          <Image
            alt=""
            src={graduatesImage}
            className={styles.imageGraduates}
          />{" "}
        </div>
      </div>
    </div>
  );
}

export default HomeGraduates;
