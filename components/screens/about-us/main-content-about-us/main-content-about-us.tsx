import React from "react";
import styles from "./main-content-about-us.module.css";
import Link from "next/link";

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
                key={link} // chave única
                className={
                  activeLink === link ? styles.activeLink : styles.link
                }
                onClick={(e) => {
                  e.preventDefault();
                  console.log(`Setting active link to: ${link}`);
                  setActiveLink(link); // Muda o estado para o link selecionado
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
