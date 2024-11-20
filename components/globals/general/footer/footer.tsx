"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";
import { IoLogoFacebook } from "react-icons/io5";
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import footerDetails from "@/public/images/footer.svg";

import { AiFillInstagram, AiFillTikTok, AiFillYoutube } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { locationsDatas } from "@/utils/constants";
import CustomButton from "../../forms/custom-button/custom-button";

const footerLink = [
  {
    href: "/",
    label: "home",
  },
  {
    href: "/about-us",
    label: "about us",
  },
  {
    href: "/practice-areas",
    label: "practice areas",
  },
  {
    href: "/articles",
    label: "resources",
  },
  {
    href: "/locations",
    label: "locations",
  },
  {
    href: "/results",
    label: "results",
  },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/FischerRedavid/",
    label: "Facebook",
    icon: <IoLogoFacebook size={24} color="#1055C1" />,
  },
  {
    href: "https://www.instagram.com/your_champions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    label: "Instagram",
    icon: <AiFillInstagram size={24} color="#1055C1" />,
  },
  {
    href: "https://www.linkedin.com/company/yourchampions/about/",
    label: "LinkedIn",
    icon: <FaLinkedin size={24} color="#1055C1" />,
  },
  {
    href: "https://x.com/OnJusticePod",
    label: "X",
    icon: <FaXTwitter size={24} color="#1055C1" />,
  },
  {
    href: "https://www.youtube.com/@onjusticepodcast",
    label: "YouTube",
    icon: <AiFillYoutube size={24} color="#1055C1" />,
  },
  {
    href: "/",
    label: "Google Business",
    icon: <FaGoogle size={24} color="#1055C1" />,
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
          alt="Vector footer"
          src={footerDetails}
          className={styles.footerImageDetails}
        />
        <div className={styles.footerColumns}>
          <div className={styles.footerContact}>
            <div className={styles.footerGetStarted}>
              <h2>LET’S GET STARTED</h2>
              <Link href="tel:8886940708">
                <CustomButton color="blue" size="medium">
                  (888) 694-0708
                </CustomButton>
              </Link>
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
            {locationsDatas.map((officeData) => (
              <div key={officeData.title} className={styles.officesContent}>
                <h4 className={styles.officeTitle}>{officeData.title}</h4>
                <span
                  className={styles.officeAddress}
                  dangerouslySetInnerHTML={{ __html: officeData.address }}
                />
                <Link className={styles.officelinkMaps} href={officeData.href}>
                  GET DIRECTIONS
                </Link>
                <iframe
                  src={officeData.iframeUrl}
                  className={styles.mapDetails}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Fischer Redavid PLLC ${officeData.title}`}
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
