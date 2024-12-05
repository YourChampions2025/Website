import DarkGrayBoxWithLogo from '@/components/globals/layout/dark-gray-box-with-logo/dark-gray-box-with-logo';
import styles from './main-content-for-attorneys.module.css';
import Link from 'next/link';

export default function MainContentForAttorneys() {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <p className={styles.introText}>
          Is your law firm too busy to handle the more complicated cases that
          come your way? If you refer a case to our team, we can handle it from
          start to finish and pay you a percentage of the fees we receive.
        </p>

        <div className={styles.section}>
          <h6 className={styles.sectionTitle}>
            We Take the Time to Maximize a Settlement
          </h6>
          <p className={styles.sectionText}>
            Getting the largest settlement for a client undoubtedly takes time.
            Not all law firms have the bandwidth to handle every case they
            receive. When you refer a case to us, we’ll work hard to maximize
            the settlement so you and the client walk away happy.
            <br />
            <br />
            We have signed six-figure referral checks on single cases, and we’re
            ready to cut a check for you, too.
          </p>
        </div>

        <div className={styles.section}>
          <h6 className={styles.sectionTitle}>
            We Aren’t Afraid to Go to Trial
          </h6>
          <p className={styles.sectionText}>
            Many law firms settle cases pretrial because it’s both
            cost-effective and timely. Our team, however, will take any case to
            trial if we feel it reaps the best results. If you have a case that
            you think will benefit from a trial verdict but don’t have the time
            to take it all the way, bring it to us. We’ll reward you for your
            referral.
          </p>
        </div>

        <div className={styles.section}>
          <h6 className={styles.sectionTitle}>Complex Cases Don’t Scare Us</h6>
          <p className={styles.sectionText}>
            If you’re considering referring your case to another law firm, you
            can trust our team to handle the most complex of cases. We have
            experience in a variety of practice areas, with specialization in
            child injuries, negligent design of buildings and structures, and
            class action product liability.
          </p>
        </div>

        <div className={styles.section}>
          <h6 className={styles.sectionTitle}>When We Win, You Win</h6>
          <p className={styles.sectionText}>
            Put simply, every time you refer a case to us, you get paid. This is
            passive income for your firm and will result in increased
            credibility.
          </p>
        </div>
      </div>

      <DarkGrayBoxWithLogo title='Refer a case today'>
        <div className={styles.contactInfo}>
          <p>
            You can get in touch with us via our online contact form or by
            calling{' '}
            <Link href='tel:+19548608434'>
              <b>(954) 860-8434</b>
            </Link>
          </p>
        </div>
      </DarkGrayBoxWithLogo>
    </div>
  );
}
