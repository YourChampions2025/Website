import Link from "next/link";
import React from "react";
import styles from "./contact-us-today.module.css";
import PreviewCard from "@/components/globals/preview-card/preview-card";

function ContactUsToday() {
  return (
    <div className={styles.contactUsTodayContainer}>
      <div className={styles.contactUsTodayContent}>
        <div className={styles.w}>
          <p>
            Our clients deserve the best, most compassionate legal
            representation. That’s why our firm is always open to adding
            quality, energetic, client-oriented team attorneys and support
            staff, such as legal assistants and paralegals. Fischer Redavid PLLC
            is a results-driven law firm. Quality legal representation leads to
            quality results.
          </p>
          <p>
            But quality customer service leads to a better experience for a
            human being who is going through a uniquely stressful situation and
            loss. Our clients and their families deserve top-notch service. 
          </p>
          <p>
            Frequent communication, attention, and support are our formula for
            success, and we adhere to that formula daily.
          </p>
          <p>
            We are not a “large” firm. That’s by design. Our focus is on quality
            over quantity: more frequent touchpoints with clients, more time
            spent per file. If you’re an attorney who wants more time to
            deep-dive into cases and you’re passionate about expanding your
            knowledge base, delivering quality work product, and trying more
            cases to verdict, we want to know about you.
          </p>
        </div>
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
              <li>Litigation Associate</li>
              <Link href="/" className={styles.linkUnderline}>
                <li>For More Information</li>
              </Link>
              <li>Prelitigation Associate</li>
            </div>

            <div className={styles.descriptionContentLinks}>
              <p className={styles.description}>Support Staff:</p>
              <li>Prelitigation Case Manager</li>
              <li>Litigation Paralegal or Legal Assistant</li>
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
