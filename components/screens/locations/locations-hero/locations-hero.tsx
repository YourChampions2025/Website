import React from "react";
import styles from "./locations-hero.module.css";
import Link from "next/link";
import { locationsDatas } from "@/utils/constants";
import { IoTriangle } from "react-icons/io5";

export default function LocationsHero() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {locationsDatas.map((data, i) => (
          <div key={i} className={styles.locationCard}>
            <iframe
              src={data.iframeUrl}
              className={styles.mapIframe}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title={`Fischer Redavid PLLC ${data.title}`}
            />

            <h2 className={styles.locationTitle}>{data.title}</h2>

            <span
              className={styles.address}
              dangerouslySetInnerHTML={{ __html: data.address }}
            />

            <Link
              href={data.href}
              target="_blank"
              className={styles.directionsLink}
            >
              <IoTriangle className={styles.icon} />
              <span>get directions</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
