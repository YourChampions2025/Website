import DarkGrayBoxWithLogo from "@/components/globals/layout/dark-gray-box-with-logo/dark-gray-box-with-logo";
import styles from "./main-content-careers.module.css";

export default function MainContentCareers() {
  return (
    <div className={styles.container}>
      <p className={styles.introText}>
        Our clients deserve the best, most compassionate legal representation.
        That’s why our firm is always open to adding quality, energetic,
        client-oriented team attorneys and support staff, such as legal
        assistants and paralegals. Fischer Redavid PLLC is a results-driven law
        firm. Quality legal representation leads to quality results.
        <br />
        <br />
        But quality customer service leads to a better experience for a human
        being who is going through a uniquely stressful situation and loss. Our
        clients and their families deserve top-notch service.
        <br />
        <br />
        Frequent communication, attention, and support are our formula for
        success, and we adhere to that formula daily.
        <br />
        <br />
        We are not a “large” firm. That’s by design. Our focus is on quality
        over quantity: more frequent touchpoints with clients, more time spent
        per file. If you’re an attorney who wants more time to deep-dive into
        cases and you’re passionate about expanding your knowledge base,
        delivering quality work product, and trying more cases to verdict, we
        want to know about you.
      </p>

      <DarkGrayBoxWithLogo title="Contact Us Today">
        <div className={styles.contactInfo}>
          <p>
            If you’re a non-attorney support staff looking to contribute
            meaningful work to cases and make an impact on our clients’ journeys
            to justice, we want to know about you.
            <br />
            <br />
            We handle personal injury and wrongful death cases in state and
            federal courts around Florida and Georgia. We are always looking to
            screen qualified candidates for our offices in Florida (located in
            Hollywood, FL) and Georgia (located in Atlanta, GA) for the
            following roles:
            <br />
            <br />
          </p>
          <div className={styles.roles}>
            <p>Attorneys:</p>
            <ul className={styles.roleList}>
              <li>Litigation Associate</li>
              <li>For More Information</li>
              <li>Prelitigation Associate</li>
            </ul>
            <br />
            <p>Support Staff:</p>
            <ul className={styles.roleList}>
              <li>Prelitigation Case Manager</li>
              <li>Litigation Paralegal or Legal Assistant</li>
            </ul>
          </div>
          <p>
            <br />
            <br />
            We offer competitive salaries based on experience for qualified
            candidates. We also offer health, dental, and vision benefits. There
            is some flexibility with scheduling for in-office and remote work
            opportunities.
          </p>
        </div>
      </DarkGrayBoxWithLogo>
    </div>
  );
}
