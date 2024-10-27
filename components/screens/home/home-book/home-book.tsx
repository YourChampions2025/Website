import React from "react";
import Image from "next/image";
import styles from "./home-book.module.css";
import bookImage from "@/public/images/book-image.png";
import bookDetails from "@/public/images/book-details.png";

function HomeBook() {
  return (
    <div className={styles.homeBookContainer}>
      <div className={styles.homeBookContent}>
        <div className={styles.firstContent}>
          <h2 className={styles.title}>
            Jordan Redavid
            <span>Book</span>
          </h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id
            nisl placerat, sodales quam a, ultricies mauris. Cras egestas
            bibendum felis, eu hendrerit ligula auctor vel. Integer molestie
            elit quis ornare euismod.
          </p>
          <button className={styles.homeBookButton}>learn more </button>
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
