"use client";
import React, { useState } from "react";
import Image from "next/image";
import articlesImage from "@/public/images/articles.png";
import styles from "./overview-card.module.css";
import Link from "next/link";
import { MdOutlineArrowRight } from "react-icons/md";
import LoadMore from "../buttons/load-more/load-more";

const initialCards = [
  {
    id: 1,
    subtitle: "wrongful rights, medical practice",
    title:
      "Maurice Monk Lawsuit & Challenges in Suing the Government for Medical Negligence",
    description:
      "Explore the complexities of medical negligence lawsuits against government entities.",
  },
  {
    id: 2,
    subtitle: "medical malpractice, patient rights",
    title: "Understanding Patient Rights in Medical Malpractice Cases",
    description:
      "Learn about the rights of patients and how to protect them in medical malpractice situations.",
  },
  {
    id: 3,
    subtitle: "negligence, legal challenges",
    title: "Navigating Legal Challenges in Medical Negligence",
    description:
      "A comprehensive guide to overcoming legal challenges in medical negligence cases.",
  },
  {
    id: 4,
    subtitle: "malpractice, compensation",
    title: "Compensation in Malpractice Cases: What You Need to Know",
    description:
      "Discover how compensation works in malpractice cases and what you might be entitled to.",
  },
  {
    id: 5,
    subtitle: "patient safety, rights",
    title: "Ensuring Patient Safety: Legal Aspects and Rights",
    description:
      "Understand the legal aspects surrounding patient safety and patient rights.",
  },
  {
    id: 6,
    subtitle: "wrongful death, legal recourse",
    title: "Legal Recourse for Wrongful Death in Medical Cases",
    description:
      "Explore your options for legal recourse in cases of wrongful death due to medical negligence.",
  },
  {
    id: 7,
    subtitle: "medical ethics, patient care",
    title: "The Role of Medical Ethics in Patient Care",
    description:
      "Examine the importance of medical ethics in ensuring quality patient care.",
  },
  {
    id: 8,
    subtitle: "healthcare laws, regulations",
    title: "Understanding Healthcare Laws and Regulations",
    description:
      "A guide to navigating the complex world of healthcare laws and regulations.",
  },
  {
    id: 9,
    subtitle: "treatment errors, rights",
    title: "Treatment Errors: Know Your Rights as a Patient",
    description:
      "Learn about your rights if you experience treatment errors in a healthcare setting.",
  },
  {
    id: 10,
    subtitle: "medical negligence, case studies",
    title: "Case Studies on Medical Negligence: Lessons Learned",
    description:
      "Review various case studies on medical negligence to understand the implications.",
  },
  {
    id: 11,
    subtitle: "personal injury, legal advice",
    title: "Seeking Legal Advice in Personal Injury Cases",
    description:
      "Find out how to seek legal advice effectively in personal injury situations.",
  },
  {
    id: 12,
    subtitle: "patient advocacy, legal rights",
    title: "The Importance of Patient Advocacy in Legal Rights",
    description:
      "Explore how patient advocacy plays a crucial role in legal rights and protections.",
  },
  {
    id: 13,
    subtitle: "medical documentation, evidence",
    title: "Importance of Medical Documentation as Evidence",
    description:
      "Understand how medical documentation serves as crucial evidence in legal cases.",
  },
  {
    id: 14,
    subtitle: "healthcare negligence, reform",
    title: "Healthcare Negligence: The Need for Reform",
    description:
      "Discuss the need for reform in healthcare to prevent negligence.",
  },
  {
    id: 15,
    subtitle: "patient trust, healthcare",
    title: "Building Trust Between Patients and Healthcare Providers",
    description:
      "Examine the factors that contribute to building trust in healthcare settings.",
  },
  {
    id: 16,
    subtitle: "medical errors, legal options",
    title: "Understanding Legal Options for Medical Errors",
    description:
      "Discover the various legal options available for addressing medical errors.",
  },
  {
    id: 17,
    subtitle: "injury claims, patient care",
    title: "Filing Injury Claims in Healthcare: What You Should Know",
    description:
      "Learn about the process of filing injury claims in the healthcare sector.",
  },
  {
    id: 18,
    subtitle: "negligence claims, rights",
    title: "Your Rights in Medical Negligence Claims",
    description: "Explore your rights when filing a medical negligence claim.",
  },
  {
    id: 19,
    subtitle: "legal procedures, medical cases",
    title: "Legal Procedures in Medical Negligence Cases",
    description:
      "A guide to understanding the legal procedures involved in medical negligence cases.",
  },
  {
    id: 20,
    subtitle: "healthcare standards, compliance",
    title: "Healthcare Standards: Ensuring Compliance",
    description:
      "Discuss the importance of healthcare standards and compliance.",
  },
  {
    id: 21,
    subtitle: "compensation claims, advice",
    title: "Expert Advice on Compensation Claims",
    description:
      "Get expert advice on how to navigate compensation claims in healthcare.",
  },
  {
    id: 22,
    subtitle: "medical liability, accountability",
    title: "Medical Liability and Accountability: What You Need to Know",
    description:
      "Understand the concepts of medical liability and accountability in healthcare.",
  },
  {
    id: 23,
    subtitle: "patient experiences, testimonials",
    title: "Patient Experiences: Lessons from Testimonials",
    description:
      "Learn from patient testimonials about their experiences with healthcare.",
  },
  {
    id: 24,
    subtitle: "law reforms, healthcare",
    title: "Healthcare Law Reforms: What Changes Are Needed?",
    description:
      "Discuss the necessary changes in healthcare laws and policies.",
  },
  {
    id: 25,
    subtitle: "medical litigation, trends",
    title: "Current Trends in Medical Litigation",
    description:
      "Explore the latest trends in medical litigation and their implications.",
  },
  {
    id: 26,
    subtitle: "personal injury, medical cases",
    title: "The Intersection of Personal Injury and Medical Cases",
    description: "Examine how personal injury law applies to medical cases.",
  },
  {
    id: 27,
    subtitle: "insurance claims, healthcare",
    title: "Navigating Insurance Claims in Healthcare",
    description:
      "A guide to effectively navigate insurance claims in healthcare.",
  },
  {
    id: 28,
    subtitle: "medical ethics, legal responsibilities",
    title: "Legal Responsibilities and Medical Ethics",
    description:
      "Discuss the intersection of legal responsibilities and medical ethics.",
  },
  {
    id: 29,
    subtitle: "patient rights, advocacy",
    title: "Advocating for Patient Rights in Healthcare",
    description:
      "Learn how to advocate for patient rights in various healthcare settings.",
  },
  {
    id: 30,
    subtitle: "medical negligence, preventative measures",
    title: "Preventing Medical Negligence: Effective Measures",
    description: "Explore effective measures to prevent medical negligence.",
  },
];

function OverviewCard() {
  const [visibleCards, setVisibleCards] = useState(3);
  const [cards, setCards] = useState(initialCards);

  const handleLoadMore = () => {
    setVisibleCards((prev) => prev + 3);
  };
  return (
    <div className={styles.overviewCardContainer}>
      <div className={styles.overviewCardContent}>
        {cards.slice(0, visibleCards).map((card) => (
          <div className={styles.cardWrapper}>
            <Image alt="" src={articlesImage} />
            <div className={styles.cardInfoContainer}>
              <span className={styles.cardSubtitle}>{card.subtitle}</span>
              <h4 className={styles.cardTitle}>{card.title}</h4>
              <p className={styles.cardDescription}>{card.description}</p>
              <Link href="/" className={styles.cardLink}>
                <MdOutlineArrowRight size={32} color="#1055C1" />
                learn more
              </Link>
            </div>
          </div>
        ))}
      </div>
      {visibleCards < cards.length && (
        <LoadMore textButton="load more articles" onClick={handleLoadMore} />
      )}
    </div>
  );
}

export default OverviewCard;
