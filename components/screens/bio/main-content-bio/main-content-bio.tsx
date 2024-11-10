import React from "react";
import Link from "next/link";
import styles from "./main-content.bio.module.css";
import { MdOutlineArrowRight } from "react-icons/md";

function MainContentBio() {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <video
          src="/videos/burn.mp4"
          autoPlay
          loop
          muted
          playsInline
          className={styles.bioVideo}
        />
        <p className={styles.introText}>
          John has dedicated his career to seeking justice for individuals and
          families who have suffered catastrophic injuries or lost loved ones
          due to the negligence of others. He believes that every human life is
          valuable and deserves to be protected, and he stands up against
          negligent insurance companies, individuals, corporations, and the
          government that try to avoid responsibility and devalue the importance
          of human life. John has seen the incredible efforts that insurance
          companies and corporate defendants have gone to deny access to
          justice. A trial lawyer is the one force that can oppose those efforts
          and achieve true justice for the clients. That is why John promotes
          fierce trial advocacy, to better those results. The key to John’s
          success is his aggressive approach. He preps for every case as if it
          will go to trial. This way, when the other side isn’t being fair, he’s
          ready to hold them accountable in the courtroom. His mission is to
          help clients level the playing field against massive companies and the
          powerful law firms they pay for defense. John calculates every step,
          never backs down, and refuses to let intimidation be used as a weapon
          by the other side.
        </p>

        <div className={styles.section}>
          <h6 className={styles.sectionTitle}>
            John has won tens of millions of dollars for his clients.{" "}
          </h6>
          <p className={styles.sectionText}>
            John Fischer's legal career shines brightly as a testament to his
            unwavering commitment to justice and excellence. Serving as the lead
            plaintiff counsel alongside his partner Jordan Redavid in the
            transformative case of Holmes v. Upchurch Foods, Inc. & McDonald's
            USA LLC, et Al, John's impact was nothing short of extraordinary.
            Their firm's remarkable achievement of prevailing over corporate
            giants McDonald's USA LLC and UpChurch Foods Inc not once, but
            twice, underscores John's exceptional legal acumen. In the initial
            trial, both companies were held accountable for the injuries
            sustained by their client's 4-year-old autistic child. Undeterred by
            the complexity of the case, John and Jordan spearheaded a second
            trial that showcased their legal brilliance. The consequential jury
            verdict, awarding $400,000 for both past and future damages,
            reverberated globally, underscoring John's profound influence in the
            legal realm. This monumental achievement solidified John Fischer's
            reputation as a dedicated advocate for justice, leaving an enduring
            impact that resonates across borders.
            <br />
            <br />
            Over the course of his career, John has recovered tens of millions
            of dollars in compensation for his clients and has achieved over a
            dozen million-dollar verdicts and settlements in cases involving
            serious injury and wrongful death. These results are a testament to
            John’s unwavering commitment to advocating for the rights of those
            who have been wronged. His passion for helping those who have been
            harmed drives him to fight tirelessly for my clients, using his
            extensive knowledge of the law and his experience in the courtroom
            to achieve the best possible outcomes.
          </p>
        </div>
      </div>
      <div>swiper</div>
      <div className={styles.asSeenOnSection}>
        <h6 className={styles.sectionTitle}>AS SEEN ON </h6>

        <div className={styles.sectionDetails}>
          <img
            src="/images/fox-business-logo.svg"
            alt=""
            className={styles.imageStyles}
          />
          <Link href="/" className={styles.link}>
            <MdOutlineArrowRight size={32} color="#1055C1" />
            read article
          </Link>
        </div>
        <div className={styles.sectionDetails}>
          <img
            src="/images/fox-business-logo.svg"
            alt=""
            className={styles.imageStyles}
          />
          <Link href="/" className={styles.link}>
            <MdOutlineArrowRight size={32} color="#1055C1" />
            read article
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainContentBio;
