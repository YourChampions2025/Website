import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import styles from "./card-image.module.css";
import { MdOutlineArrowRight } from "react-icons/md";

interface CardImageProps {
  image: string | StaticImageData;
  cardName: string;
  professionalPosition: string;
  href: string;
}

function CardImage({
  image,
  cardName,
  professionalPosition,
  href,
}: CardImageProps) {
  return (
    <div className={styles.cardImageContainer}>
      <div className={styles.cardWrapper}>
        <Image alt="" src={image} className={styles.imageContent} />
        <div className={styles.cardContent}>
          <h2 className={styles.cardName}>{cardName}</h2>
          <div className={styles.separator} />
          <div className={styles.cardFooter}>
            <span className={styles.professionalPosition}>
              {professionalPosition}
            </span>
            <Link href={href} className={styles.link}>
              <MdOutlineArrowRight size={32} color="#1055C1" />
              Read Bio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardImage;
