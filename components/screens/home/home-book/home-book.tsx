import React from "react";
import Image from "next/image";
import styles from "./home-book.module.css";
import bookImage from "@/public/images/home-book.png";
import bookDetails from "@/public/images/home-book-details.png";
import Link from "next/link";

function HomeBook() {
  return (
    <div className={styles.homeBookContainer}>
      <div className={styles.homeBookContent}>
        <div className={styles.firstContent}>
          <h2 className={styles.title}>
            Jordan Redavid&apos;s Book on the Legal Implications of
            <span>Drowning Cases</span>
          </h2>
          <p className={styles.description}>
            In 2024, Jordan Redavid, along with other thought leaders in the
            aquatic safety industry, co-authored the book Retention Pond Safety:
            Practices and Principles, writing a chapter on the legal
            implications of drowning cases involving retention and detention
            ponds. In it, Jordan offers insight into ways these ponds can be
            made more safe, why and how drownings happen in them, what causes of
            action and against whom might be available, how some courts have
            treated drowning lawsuits, and the most common defenses that he has
            seen raised by at-fault parties. 
          </p>
          <Link href="/practice-areas/drowning">
            <button className={styles.homeBookButton}>learn more</button>
          </Link>
        </div>

        <div>
          <Image src={bookImage} className={styles.bookImage} alt="" />
          <div className={styles.imageDetailsContainer}>
            <Image src={bookDetails} className={styles.bookDetails} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBook;
