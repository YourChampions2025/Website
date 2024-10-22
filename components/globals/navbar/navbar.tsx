import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

const navbarLinks = [
  {
    href: "/",
    label: "home",
  },
  {
    href: "/",
    label: "about us",
  },
  {
    href: "/",
    label: "practice areas",
  },
  {
    href: "/",
    label: "resources",
  },
  {
    href: "/",
    label: "locations",
  },
  {
    href: "/",
    label: "results",
  },
];

const contacts = [
  {
    icon: <FaPhoneFlip size={14} color="#2de046" />,
    textContact: "(888) 694-0708",
  },
  {
    icon: <MdMailOutline size={14} color="#2de046" />,
    textContact: "contact@frtriallawyers.com",
  },
];

interface navBarProps {
  navbarTitle: string;
  navbarDescription: string;
}

function Navbar({ navbarTitle, navbarDescription }: navBarProps) {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarContent}>
        <div className={styles.navbarlinks}>
          <div className={styles.linkDetails}>
            {navbarLinks.map((data) => (
              <Link href={data.href}>{data.label}</Link>
            ))}
          </div>

          <div className={styles.contactsWrapper}>
            {contacts.map((contact) => (
              <div className={styles.contactsContent}>
                <div className={styles.borderIcon}>{contact.icon}</div>
                <h2 className={styles.linkContacts}>{contact.textContact}</h2>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.navbarTitleContainer}>
          <h2 className={styles.navbarTitle}>{navbarTitle}</h2>
          <span className={styles.navbarDesc}>{navbarDescription}</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
