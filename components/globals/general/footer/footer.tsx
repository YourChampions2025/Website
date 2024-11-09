"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";
import { IoLogoFacebook } from "react-icons/io5";
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import virginMap from "@/public/images/virgin-office.png";
import floridaMap from "@/public/images/florida-office.png";
import georgiaMap from "@/public/images/georgia-office.png";
import footerDetails from "@/public/images/footer-details.png";

import { AiFillInstagram, AiFillTikTok, AiFillYoutube } from "react-icons/ai";
import { usePathname } from "next/navigation";

const footerLink = [
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
    label: "results ",
  },
];

const socialLinks = [
  {
    href: "/",
    label: "Facebook",
    icon: <IoLogoFacebook size={24} color="#1055C1" />,
  },
  {
    href: "/",
    label: "Instagram",
    icon: <AiFillInstagram size={24} color="#1055C1" />,
  },
  {
    href: "/",
    label: "LinkedIn",
    icon: <FaLinkedin size={24} color="#1055C1" />,
  },
  {
    href: "/",
    label: "TikTok",
    icon: <AiFillTikTok size={24} color="#1055C1" />,
  },
  {
    href: "/",
    label: "YouTube",
    icon: <AiFillYoutube size={24} color="#1055C1" />,
  },
  {
    href: "/",
    label: "Google Business",
    icon: <FaGoogle size={24} color="#1055C1" />,
  },
];

const officeAddress = [
  {
    title: "florida office",
    address: "3325 Hollywood Blvd, #500 Hollywood, FL 33021",
    href: "/",
    image: floridaMap,
  },
  {
    title: "Georgia Office",
    address: "3975 Roswell Road NE, Suite 3 Atlanta, GA 30342",
    href: "/",
    image: georgiaMap,
  },
  {
    title: "U.S. Virgin Islands Office",
    address: "15-B Norre Gade St Thomas, 00804",
    href: "/",
    image: virginMap,
  },
];

function Footer() {
  const pathname = usePathname();

  const isStudio = pathname.includes("/studio");

  if (isStudio) return null;

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.headerWrapper}>
          {footerLink.map((dataLink) => (
            <Link
              key={dataLink.label}
              href={dataLink.href}
              className={styles.headerLink}
            >
              {dataLink.label}
              <span className={styles.split}>/</span>
            </Link>
          ))}
        </div>
        <span className={styles.lineSeparator} />
        <Image
          alt=""
          src={footerDetails}
          className={styles.footerImageDetails}
        />
        <div className={styles.footerColumns}>
          <div className={styles.footerContact}>
            <div className={styles.footerGetStarted}>
              <h2>
                LET’S GET <br />
                STARTED
              </h2>
              <button className={styles.buttonFooter}>(888) 694-0708</button>
            </div>
            <div className={styles.footerSocialLinksContainer}>
              <div className={styles.footerSocialLinksColumns}>
                {socialLinks.slice(0, 3).map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className={styles.footerSocialLink}
                    aria-label={link.label}
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className={styles.footerSocialLinksColumns}>
                {socialLinks.slice(3, 5).map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className={styles.footerSocialLink}
                    aria-label={link.label}
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                ))}
              </div>
              <div>
                <Link
                  href={socialLinks[5].href}
                  className={styles.footerSocialLink}
                  aria-label={socialLinks[5].label}
                >
                  {socialLinks[5].icon}
                  {socialLinks[5].label}
                </Link>
              </div>
            </div>
          </div>

          <span className={styles.verticalSeparatorLine} />
          <div className={styles.officesWrapper}>
            {officeAddress.map((officeData) => (
              <div key={officeData.title} className={styles.officesContent}>
                <h4 className={styles.officeTitle}>{officeData.title}</h4>
                <p className={styles.officeAddress}>{officeData.address}</p>
                <Link className={styles.officelinkMaps} href={officeData.href}>
                  GET DIRECTIONS
                </Link>
                <Image
                  src={officeData.image}
                  alt=""
                  className={styles.mapDetails}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.footerTerms}>
        <Link href="/" className={styles.linkTerms}>
          Terms and condition
        </Link>
        <Link href="/" className={styles.linkTerms}>
          Privacy Policy{" "}
        </Link>
        <p className={styles.linkTerms}>
          Copyright @ 2024 Your Champions. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
