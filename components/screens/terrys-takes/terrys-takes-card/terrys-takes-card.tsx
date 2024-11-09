import React from "react";
import Link from "next/link";
import styles from "./terrys-takes-card.module.css";
import { RiArrowDropRightFill } from "react-icons/ri";
import LoadMoreDynamicData from "@/components/globals/general/load-more-dynamic-data/load-more-dynamic-data";

const TerrysTakes = [
  {
    date: "Apr 9, 2024",
    header: "6th DCA, Terry's Takes, Premises Liability",
    title: "Johnson & Krej Leasing, Inc.",
    text: "Plaintiff was shot in a brawl at an Orlando strip club. Plaintiffdid not sue the club or the company hired to handle security for theclub. Instead, he sued the property owner and his management company, which he used to collect rent...",
    href: "",
  },
  {
    date: "Apr 9, 2024",
    header: "6th DCA, Terry's Takes, Premises Liability",
    title: "Johnson & Krej Leasing, Inc.",
    text: "Plaintiff was shot in a brawl at an Orlando strip club. Plaintiffdid not sue the club or the company hired to handle security for theclub. Instead, he sued the property owner and his management company, which he used to collect rent...",
    href: "",
  },
  {
    date: "Apr 9, 2024",
    header: "6th DCA, Terry's Takes, Premises Liability",
    title: "Johnson & Krej Leasing, Inc.",
    text: "Plaintiff was shot in a brawl at an Orlando strip club. Plaintiffdid not sue the club or the company hired to handle security for theclub. Instead, he sued the property owner and his management company, which he used to collect rent...",
    href: "",
  },
];

function TerrysTakesCard() {
  const MAX_WORDS = 37;

  const truncateText = (text: string) => {
    const words = text.split(" ");
    if (words.length > MAX_WORDS) {
      return words.slice(0, MAX_WORDS).join(" ") + "...";
    }
    return text;
  };
  return (
    <div className={styles.terrysTakesCardContainer}>
      <div className={styles.terrysTakesCardContent}>
        {TerrysTakes.map((data, i) => (
          <div className={styles.terrysTakesCard} key={i}>
            <span className={styles.date}>{data.date}</span>
            <p className={styles.header}>{data.header}</p>
            <h2 className={styles.title}>{data.title}</h2>
            <h6 className={styles.description}>{truncateText(data.text)}</h6>
            <Link href={data.href} className={styles.linkDetails}>
              <RiArrowDropRightFill
                size={42}
                color="#1055C1"
                className={styles.arrowIcon}
              />
              learn more
            </Link>
          </div>
        ))}
      </div>
      <LoadMoreDynamicData>load more</LoadMoreDynamicData>
    </div>
  );
}

export default TerrysTakesCard;
