"use client";

import React, { useState } from "react";
import styles from "./case-success-card.module.css";
import LoadMoreDynamicData from "@/components/globals/general/load-more-dynamic-data/load-more-dynamic-data";
import Link from "next/link";
import { RiArrowDropRightFill } from "react-icons/ri";

const cardData = [
  {
    offer: "80x Offer ",
    offerValue: "($50K)",
    value: "$11.9 Million",
    descriptionCase: "Medical Negligence Settlement",
    linkHref: "/",
  },
  {
    offer: "80x Offer ",
    offerValue: "($50K)",
    value: "$5.9 Million",
    descriptionCase: "Rear-End Collision Verdict",
    linkHref: "/",
  },
  {
    offer: "80x Offer ",
    offerValue: "($50K)",
    value: "$11.9 Million",
    descriptionCase: "Wrongful Death Settlement",
    linkHref: "/",
  },
  {
    offer: "80x Offer ",
    offerValue: "($50K)",
    value: "$4 Million",
    descriptionCase: "MVC Case Verdict",
    linkHref: "/",
  },
  {
    offer: "80x Offer ",
    offerValue: "($50K)",
    value: "$3.2 Million",
    descriptionCase: "Brain Injury Verdict",
    linkHref: "/",
  },
  {
    offer: "80x Offer ",
    offerValue: "($50K)",
    value: "$3 Million",
    descriptionCase: "Truck Crash  Settlement",
    linkHref: "/",
  },
  {
    offer: "80x Offer ",
    offerValue: "($50K)",
    value: "$11.9 Million",
    descriptionCase: "Medical Negligence Settlement",
    linkHref: "/",
  },
  {
    offer: "80x Offer ",
    offerValue: "($50K)",
    value: "$5.9 Million",
    descriptionCase: "Rear-End Collision Verdict",
    linkHref: "/",
  },
  {
    offer: "80x Offer ",
    offerValue: "($50K)",
    value: "$11.9 Million",
    descriptionCase: "Wrongful Death Settlement",
    linkHref: "/",
  },
  {
    offer: "80x Offer ",
    offerValue: "($50K)",
    value: "$4 Million",
    descriptionCase: "MVC Case Verdict",
    linkHref: "/",
  },
  {
    offer: "80x Offer ",
    offerValue: "($50K)",
    value: "$3.2 Million",
    descriptionCase: "Brain Injury Verdict",
    linkHref: "/",
  },
  {
    offer: "80x Offer ",
    offerValue: "($50K)",
    value: "$3 Million",
    descriptionCase: "Truck Crash  Settlement",
    linkHref: "/",
  },
  {
    offer: "80x Offer ",
    offerValue: "($50K)",
    value: "$11.9 Million",
    descriptionCase: "Medical Negligence Settlement",
    linkHref: "/",
  },
  {
    offer: "80x Offer ",
    offerValue: "($50K)",
    value: "$5.9 Million",
    descriptionCase: "Rear-End Collision Verdict",
    linkHref: "/",
  },
  {
    offer: "80x Offer ",
    offerValue: "($50K)",
    value: "$11.9 Million",
    descriptionCase: "Wrongful Death Settlement",
    linkHref: "/",
  },
  {
    offer: "80x Offer ",
    offerValue: "($50K)",
    value: "$4 Million",
    descriptionCase: "MVC Case Verdict",
    linkHref: "/",
  },
  {
    offer: "80x Offer ",
    offerValue: "($50K)",
    value: "$3.2 Million",
    descriptionCase: "Brain Injury Verdict",
    linkHref: "/",
  },
  {
    offer: "80x Offer ",
    offerValue: "($50K)",
    value: "$3 Million",
    descriptionCase: "Truck Crash  Settlement",
    linkHref: "/",
  },
  {
    offer: "80x Offer ",
    offerValue: "($50K)",
    value: "$11.9 Million",
    descriptionCase: "Medical Negligence Settlement",
    linkHref: "/",
  },
  {
    offer: "80x Offer ",
    offerValue: "($50K)",
    value: "$5.9 Million",
    descriptionCase: "Rear-End Collision Verdict",
    linkHref: "/",
  },
  {
    offer: "80x Offer ",
    offerValue: "($50K)",
    value: "$11.9 Million",
    descriptionCase: "Wrongful Death Settlement",
    linkHref: "/",
  },
  {
    offer: "80x Offer ",
    offerValue: "($50K)",
    value: "$4 Million",
    descriptionCase: "MVC Case Verdict",
    linkHref: "/",
  },
  {
    offer: "80x Offer ",
    offerValue: "($50K)",
    value: "$3.2 Million",
    descriptionCase: "Brain Injury Verdict",
    linkHref: "/",
  },
  {
    offer: "80x Offer ",
    offerValue: "($50K)",
    value: "$3 Million",
    descriptionCase: "Truck Crash  Settlement",
    linkHref: "/",
  },
];
const INITIAL_CARDS = 9;
const CARDS_INCREMENT = 3;

function CaseSuccessCard() {
  const [visibleCards, setVisibleCards] = useState(INITIAL_CARDS);

  function handleLoadMore() {
    setVisibleCards((prev) => prev + CARDS_INCREMENT);
  }
  return (
    <div className={styles.caseSuccessCardContainer}>
      <div className={styles.caseSuccessCardContent}>
        {cardData.slice(0, visibleCards).map((data, i) => (
          <div key={i} className={styles.cardContainer}>
            <p className={styles.cardHeader}>
              {data.offer} <span>{data.offerValue}</span>
            </p>

            <div className={styles.titleContainer}>
              <h2 className={styles.cardTitle}>{data.value}</h2>
              <p className={styles.cardDescription}>{data.descriptionCase}</p>
            </div>

            <Link href={data.linkHref} className={styles.linkDetails}>
              <RiArrowDropRightFill
                size={42}
                color="#1055C1"
                className={styles.arrowIcon}
              />
              read more
            </Link>
          </div>
        ))}
      </div>
      {visibleCards < cardData.length && (
        <LoadMoreDynamicData onClick={handleLoadMore}>
          load more
        </LoadMoreDynamicData>
      )}
    </div>
  );
}

export default CaseSuccessCard;
