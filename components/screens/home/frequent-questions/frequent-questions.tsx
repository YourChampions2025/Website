"use client";
import Image from "next/image";
import classNames from "classnames";
import React, { useState } from "react";
import styles from "./frequent-questions.module.css";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import Collapse from "@/components/globals/general/collapse/collapse";
import faqImage from "@/public/images/home-cover-frequently-questions.png";
import Link from "next/link";
import { questionsAndAnswers } from "@/utils/constants";

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
              const { question, answer, links } = item;
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
                    {answer && <p className={styles.answerText}>{answer}</p>}
                    {links && (
                      <ul className={styles.linkList}>
                        {links.map((link, index) => (
                          <li key={index} className={styles.linkItem}>
                            <div className={styles.bullet} />
                            <Link
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.linkText}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
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
