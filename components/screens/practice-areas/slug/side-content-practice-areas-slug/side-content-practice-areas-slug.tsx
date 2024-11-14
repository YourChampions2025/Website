"use client";

import ContactUsForm from "@/components/globals/forms/contact-us-form/contact-us-form";
import SideContentHeader from "@/components/globals/layout/side-content-header/side-content-header";
import classNames from "classnames";
import Link from "next/link";
import React from "react";
import styles from "./side-content-practice-areas-slug.module.css";
import { practiceAreaLinks } from "@/utils/constants";
import { usePathname } from "next/navigation";

export default function SideContentPracticeAreasSlug() {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <SideContentHeader
        title="work with your legal champions"
        description="Free & Confidential Consultation"
      />
      <ContactUsForm />

      <div className={styles.helpSection}>
        <h6 className={styles.helpTitle}>how we can help</h6>

        <div className={styles.linksContainer}>
          {practiceAreaLinks.map((link, index) => (
            <Link
              key={index}
              href={`/practice-areas/${link.href}`}
              className={classNames(
                styles.link,
                pathname.includes(link.label.toLowerCase().replace(/\s+/g, "-"))
                  ? styles.mainLink
                  : styles.secondaryLink
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
