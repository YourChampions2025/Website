import ContactUsForm from "@/components/globals/forms/contact-us-form/contact-us-form";
import SideContentHeader from "@/components/globals/layout/side-content-header/side-content-header";
import classNames from "classnames";
import Link from "next/link";
import React from "react";
import styles from "./side-content-practice-areas-slug.module.css";

const fakeLinks = [
  "Catastrophic Injuries",
  "Burn Injuries",
  "Drowning",
  "Traumatic Brain Injuries",
  "Wrongful Death",
  "Medical Malpractice",
  "Product Liability",
];

export default function SideContentPracticeAreasSlug() {
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
          {fakeLinks.map((link, index) => (
            <Link
              key={index}
              href="#"
              className={classNames(
                styles.link,
                index === 0 ? styles.mainLink : styles.secondaryLink
              )}
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
