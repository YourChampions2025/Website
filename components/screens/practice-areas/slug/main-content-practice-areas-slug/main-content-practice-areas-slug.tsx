import React from "react";
import styles from "./main-content-practice-areas-slug.module.css";
import type { TypedObject } from "sanity";
import PortableTextComponent from "@/components/globals/general/portable-text-component/portable-text-component";

interface MainContentPracticeAreasSlugProps {
  content: TypedObject | TypedObject[];
  secondaryContent?: TypedObject | TypedObject[];
}

export default function MainContentPracticeAreasSlug({
  content,
  secondaryContent,
}: MainContentPracticeAreasSlugProps) {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.articleText}>
          <PortableTextComponent content={content} />
          {secondaryContent && (
            <PortableTextComponent content={secondaryContent} />
          )}
        </div>
      </div>
    </div>
  );
}
