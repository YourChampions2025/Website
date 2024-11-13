import React from "react";
import styles from "./blog-slug-hero.module.css";
import Image from "next/image";

interface BlogSlugHeroProps {
  imageUrl?: string;
}

export default function BlogSlugHero({
  imageUrl = "/images/contact-us-image.png",
}: BlogSlugHeroProps) {
  return (
    <div className={styles.container}>
      <Image
        width={1920}
        height={1080}
        src={imageUrl}
        alt="Image for blog slug hero component"
        className={styles.image}
      />
      <div className={styles.overlay} />
    </div>
  );
}
