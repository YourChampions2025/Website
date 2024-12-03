import React from "react";
import styles from "./privacy-policy-content.module.css";

const listItems = [
  "Cooperate with the investigations of purported unlawful activities and conform to the edicts of the law or comply with legal process served on our company",
  "Protect and defend the rights or property of our Website and related properties",
  "Identify persons who may be violating the law, the rights of third parties, or otherwise misusing our Website or its related properties",
];

const sections = [
  {
    title: "Information Collection",
    content: [
      "We may collect non-personal information, such as a domain name and IP Address. The domain name and IP address reveals nothing personal about you other than the IP address from which you have accessed our site. We may also collect information about the type of Internet browser you are using, operating system, what brought you to our Website, as well as which of our Web pages you have accessed.",
      "Additionally, if you communicate with us regarding our Website or our services, we will collect any information that you provide to us in any such communication.",
      "We may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.",
    ],
  },
  {
    title: "Information Use",
    content: [
      "We use the collected information primarily for our own internal purposes, such as providing, maintaining, evaluating, and improving our services and Website, fulfilling requests for information, and providing customer support.",
    ],
  },
  {
    title: "Security",
    content: [
      "We follow generally accepted industry standards to protect the information submitted to us, both during transmission and once we receive it.",
      "If we collect sensitive information (such as credit card data), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a closed lock icon at the bottom of your web browser, or looking for 'https' at the beginning of the address of the web page.",
      "While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.",
    ],
  },
  {
    title: "Cookies",
    content: [
      "We use 'cookies' on this site. A cookie is a piece of data stored on a site visitor's hard drive to help us improve your access to our site and identify repeat visitors to our site. For instance, when we use a cookie to identify you, you would not have to log in a password more than once, thereby saving time while on our site. Cookies can also enable us to track and target the interests of our users to enhance the experience on our site. Usage of a cookie is in no way linked to any personally identifiable information on our site.",
    ],
  },
  {
    title: "Links",
    content: [
      "This Website may contain links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.",
    ],
  },
  {
    title: "Surveys & Contests",
    content: [
      "From time-to-time our site may request information via surveys or contests. Participation in these surveys or contests is completely voluntary and you may choose whether or not to participate and therefore disclose this information. Information requested may include contact information (such as name and shipping address), and demographic information (such as zip code, age). Contact information will be used to notify the winners and award prizes. Survey information will be used for purposes of monitoring or improving the use and satisfaction of this site.",
    ],
  },
  {
    title: "Consent",
    content: [
      "By using this Website, you consent to the collection and use of information as specified above. If we make changes to our Privacy Policy, we will post those changes on this page. Please review this page frequently to remain up-to-date with the information we collect, how we use it, and under what circumstances we disclose it. You must review the new Privacy Policy carefully to make sure you understand our practices and procedures.",
    ],
  },
];

function PrivacyPolicyContent() {
  return (
    <div className={styles.privacypolicyContainer}>
      <div className={styles.privacypolicyWrapper}>
        <p className={styles.description}>
          We recognize that you may be concerned about our use and disclosure of
          your personal information. Your privacy is very important to us, and
          the following will inform you of the information that we, Fischer
          Redavid PLLC.
        </p>

        {sections.map((section, index) => (
          <div key={index}>
            <h2 className={styles.title}>{section.title}</h2>
            {section.content.map((paragraph, idx) => (
              <p key={idx} className={styles.description}>
                {paragraph}
              </p>
            ))}
          </div>
        ))}

        <h2 className={styles.title}>Sharing</h2>
        <ul className={styles.contentList}>
          {listItems.map((item, index) => (
            <li className={styles.list} key={index}>
              {item}
            </li>
          ))}
        </ul>

        <span className={styles.descriptionBold}>
          If you feel that we are not abiding by this privacy policy, you should
          contact us immediately via telephone at (888) 694-0708 or via mail
          Attn:
          <br /> Privacy Officer, 3975 Roswell Rd. NE Suite 3, Atlanta, GA
          30342.
        </span>
      </div>
    </div>
  );
}

export default PrivacyPolicyContent;
