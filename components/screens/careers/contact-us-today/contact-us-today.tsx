import Link from "next/link";
import React from "react";
import styles from "./contact-us-today.module.css";
import PreviewCard from "@/components/globals/preview-card/preview-card";

function ContactUsToday() {
  return (
    <div>
      <div>
        <div>label</div>
        <div>
          <PreviewCard title="Contact Us Today">
            <p className={styles.description}>
              If you’re a non-attorney support staff looking to contribute
              meaningful work to cases and make an impact on our clients’
              journeys to justice, we want to know about you.
            </p>
            <p className={styles.description}>
              We handle personal injury and wrongful death cases in state and
              federal courts around Florida and Georgia. We are always looking
              to screen qualified candidates for our offices in Florida (located
              in Hollywood, FL) and Georgia (located in Atlanta, GA) for the
              following roles:
            </p>
            <div className={styles.descriptionContentLinks}>
              <p className={styles.description}>Attorneys:</p>
              <span>Litigation Associate</span>
              <Link href="/" className={styles.linkUnderline}>
                For More Information
              </Link>
              <span>Prelitigation Associate</span>
            </div>

            <div className={styles.descriptionContentLinks}>
              <p className={styles.description}>Support Staff:</p>
              <span>Prelitigation Case Manager</span>
              <span>Litigation Paralegal or Legal Assistant</span>
            </div>

            <p>
              We offer competitive salaries based on experience for qualified
              candidates. We also offer health, dental, and vision benefits.
              There is some flexibility with scheduling for in-office and remote
              work opportunities.
            </p>
          </PreviewCard>
        </div>
      </div>
    </div>
  );
}

export default ContactUsToday;
