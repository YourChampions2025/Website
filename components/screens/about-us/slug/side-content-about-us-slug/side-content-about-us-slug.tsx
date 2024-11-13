import ContactUsForm from "@/components/globals/forms/contact-us-form/contact-us-form";
import SideContentHeader from "@/components/globals/layout/side-content-header/side-content-header";
import React from "react";
import styles from "./side-content-about-us-slug.module.css";

export default function SideContentAboutUsSlug() {
  return (
    <div className={styles.container}>
      <SideContentHeader
        title="work with your legal champions"
        description="Free & Confidential Consultation"
      />
      <ContactUsForm />
    </div>
  );
}
