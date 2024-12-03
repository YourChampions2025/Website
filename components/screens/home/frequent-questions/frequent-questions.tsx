"use client";
import Image from "next/image";
import classNames from "classnames";
import React, { useState } from "react";
import styles from "./frequent-questions.module.css";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import Collapse from "@/components/globals/general/collapse/collapse";
import faqImage from "@/public/images/home-cover-frequently-questions.png";

const questionsAndAnswers = [
  {
    question:
      "What do I need to prove to be successful in my personal injury case?",
    answer:
      "You will file an insurance claim with your own auto insurance company after your car accident. Florida is a fault state for car accidents, so you are required to carry personal injury protection (PIP) coverage as part of your auto insurance policy. This coverage means your insurer has an obligation to cover certain losses when you are involved in a collision. But, insurers are rarely fair when it comes to victim compensation.",
  },
  {
    question: "What Should I Do After an Accident?",
    answer:
      "After an accident, stay calm and move to a safe location to avoid further risks. Check for injuries and assess the damage. If the other driver is reliable, exchange basic information such as name, driver’s license details, and insurance information. Gather evidence immediately by taking photos of the scene, injuries, and all vehicles involved.",
  },
  {
    question: "Can I sue for a slip-and-fall injury if I was partly at fault?",
    answer:
      "You can still file a lawsuit even if you were partially at fault. According to the state’s comparative negligence laws, victims who are somehow responsible for their injuries can receive compensation that’s less than the percentage of fault contributed. Even so, your lawyer will still focus on maximizing the settlement you’re due. ",
  },
];

function FrequentQuestions() {
  const [selectedItem, setSelectedItem] = useState<number | null>(0);

  const toggleVisibility = (i: number) => {
    setSelectedItem((prevItem) => (prevItem === i ? null : i));
  };

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.contentContainer}>
        <h2 className={styles.heading}>frequently asked questions</h2>
        <div className={styles.content}>
          <div className={styles.questionsContainer}>
            {questionsAndAnswers.map((item, i) => {
              const { question, answer } = item;
              const isOpen = selectedItem === i;

              return (
                <div
                  key={i}
                  className={classNames(
                    styles.questionItem,
                    isOpen ? styles.questionItemOpen : null
                  )}
                >
                  <div
                    onClick={() => toggleVisibility(i)}
                    className={classNames(
                      styles.questionHeader,
                      isOpen ? styles.questionOpen : styles.questionClosed
                    )}
                  >
                    <h3
                      className={classNames(
                        styles.questionText,
                        isOpen ? styles.questionText : styles.questionTextClosed
                      )}
                    >
                      {question}
                    </h3>
                    <span
                      className={classNames(
                        styles.iconContainer,
                        isOpen ? styles.iconOpen : styles.iconClosed
                      )}
                    >
                      {isOpen ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
                    </span>
                  </div>

                  <Collapse isOpen={isOpen}>
                    <p className={styles.answerText}>{answer}</p>
                  </Collapse>
                </div>
              );
            })}
          </div>
          <div className={styles.mediaContainer}>
            <Image
              alt="photo of Fisher & Redavid lawyers"
              src={faqImage}
              className={styles.faqMedia}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FrequentQuestions;
