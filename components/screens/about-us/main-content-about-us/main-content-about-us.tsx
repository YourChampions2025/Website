import React from "react";
import styles from "./main-content-about-us.module.css";

interface MainContentAboutUsProps {
  activeLink: string;
  setActiveLink: (link: string) => void;
  links: string[];
}

function MainContentAboutUs({
  activeLink,
  setActiveLink,
  links,
}: MainContentAboutUsProps) {
  return (
    <div className={styles.mainContentAboutUsContainer}>
      <div>
        <div className={styles.contentTitle}>
          <div />
          learn more
        </div>

        <div className={styles.linkContainer}>
          <div className={styles.linkContainer}>
            {links.map((link) => (
              <div
                key={link}
                className={
                  activeLink === link ? styles.activeLink : styles.link
                }
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink(link);
                }}
              >
                {link}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContentAboutUs;
