import React from "react";
import styles from "./blog-slug-hero.module.css";
interface BlogSlugHeroProps {
  imageUrl?: string;
}

export default function BlogSlugHero({
  imageUrl = "/images/contact-us-image.png",
}: BlogSlugHeroProps) {
  return (
    <div className={styles.container}>
      <img src={imageUrl} alt="resources-slug-hero" className={styles.image} />
      <div className={styles.overlay} />
    </div>
  );
}
