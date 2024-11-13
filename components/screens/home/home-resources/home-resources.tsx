"use client";
import React from "react";
import styles from "./home-resources.module.css";
import Link from "next/link";
import { RiArrowDropRightFill } from "react-icons/ri";
import resourcesDetails from "@/public/images/resources.svg";
import Image from "next/image";

function HomeResources() {
  return (
    <div className={styles.homeResourcesContainer}>
      <div className={styles.homeResourcesContent}>
        <div className={styles.headingContent}>
          <h2 className={styles.title}>resources</h2>

          <Link href="/articles" className={styles.linkDetails}>
            <RiArrowDropRightFill
              size={42}
              color="#1055C1"
              className={styles.arrowIcon}
            />
            view all resources
          </Link>
        </div>
        <div className={styles.swiper}>swiper</div>

        <Image alt="" src={resourcesDetails} className={styles.imageDetails} />
        {/* 
        <div>
          <OverviewCard isHome={true} />
        </div> */}
      </div>
    </div>
  );
}

export default HomeResources;
