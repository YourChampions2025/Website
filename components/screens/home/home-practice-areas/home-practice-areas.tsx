"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiArrowDropRightFill } from "react-icons/ri";
import styles from "./home-practice-areas.module.css";
import imageBurn from "@/public/images/home-practice-burn.png";
import imageDrowning from "@/public/images/home-practice-drowning.png";
import imageCatastrophic from "@/public/images/home-practice-catastrophic.png";
import CustomButton from "@/components/globals/forms/custom-button/custom-button";
import { useRouter } from "next/navigation";

const practiceAreasCard = [
  {
    image: imageCatastrophic,
    label: "Catastrophic Injuries",
    href: "/practice-areas/catastrophic-injuries",
    alt: "Catastrophic Injuries",
  },
  {
    image: imageBurn,
    label: "Burn Injuries",
    href: "/practice-areas/burn-injuries",
    alt: "Burn Injuries",
  },
  {
    image: imageDrowning,
    label: "Drowning",
    href: "/practice-areas/drowning",
    alt: "Drowning",
  },
];

function HomePracticeAreas() {
  const router = useRouter();

  function handleButtonResults() {
    router.push("/practice-areas");
  }

  return (
    <section className={styles.practiceAreasSection}>
      <div className={styles.practiceAreasContainer}>
        <div className={styles.practiceAreasContent}>
          <div className={styles.practiceAreasHeaderWrapper}>
            <h2 className={styles.headerTitle}>practice areas</h2>
            <CustomButton
              type="submit"
              size="medium"
              color="blue"
              onClick={handleButtonResults}
            >
              explore all practice areas
            </CustomButton>
          </div>

          <div className={styles.itemContaiter}>
            {practiceAreasCard.map((data, i) => (
              <div key={i} className={styles.linksContainer}>
                <Image
                  alt={data.alt}
                  src={data.image}
                  className={styles.imageDetails}
                />
                <div className={styles.labelContainer}>
                  <p className={styles.labelTitle}>{data.label}</p>
                  <Link href={data.href} className={styles.linkDetails}>
                    <RiArrowDropRightFill
                      size={38}
                      color="#2DE046"
                      className={styles.arrowIcon}
                    />
                    learn more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePracticeAreas;
