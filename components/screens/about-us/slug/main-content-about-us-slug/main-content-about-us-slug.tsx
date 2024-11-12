import React from "react";
import styles from "./main-content-about-us-slug.module.css";
import type { ProfileProps } from "@/types/types";
import PortableTextComponent from "@/components/globals/general/portable-text-component/portable-text-component";

interface MainContentAboutUsSlugProps {
  profile: ProfileProps;
}

export default function MainContentAboutUsSlug({
  profile,
}: MainContentAboutUsSlugProps) {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.articleText}>
          {profile?.videoUrl && (
            <div className="w-full h-fit relative">
              <div className="w-full h-full absolute top-0 left-0 bg-black/50" />
              <video
                className="w-full h-fit relative z-10"
                src={profile?.videoUrl}
                autoPlay
                muted
                loop
                controls
              />
            </div>
          )}

          <div className="w-full mt-14">
            <PortableTextComponent content={profile?.content} />
          </div>
        </div>
      </div>
    </div>
  );
}
