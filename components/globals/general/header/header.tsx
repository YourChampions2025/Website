"use client";
import React from "react";
import style from "./header.module.css";
import fischerLogo from "@/public/images/fischerLogo.svg";
import CustomButton from "../../forms/custom-button/custom-button";

import Image from "next/image";
import Link from "next/link";
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillInstagram, AiFillTikTok, AiFillYoutube } from "react-icons/ai";
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import { MdMailOutline, MdPhone } from "react-icons/md";
import { usePathname } from "next/navigation";

const socialLinks = [
  {
    href: "/",
    icon: <IoLogoFacebook size={24} />,
  },
  {
    href: "/",
    icon: <AiFillInstagram size={24} />,
  },
  {
    href: "/",
    icon: <FaLinkedin size={24} />,
  },
  {
    href: "/",
    icon: <AiFillTikTok size={24} />,
  },
  {
    href: "/",
    icon: <AiFillYoutube size={24} />,
  },
  {
    href: "/",
    icon: <FaGoogle size={24} />,
  },
];

const navbarLinks = [
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
    href: "/resources",
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

const contacts = [
  {
    icon: <MdPhone size={14} color="#2de046" />,
    textContact: "(888) 694-0708",
  },
  {
    icon: <MdMailOutline size={14} color="#2de046" />,
    textContact: "contact@frtriallawyers.com",
  },
];

function Header() {
  const pathname = usePathname();

  const isStudio = pathname.includes("/studio");

  if (isStudio) return null;

  return (
    <div className={style.headerContainer}>
      <div className={style.headerContent}>
        <div className={style.headerFirstRow}>
          <Image src={fischerLogo} alt="fischerLogo" />

          <div className={style.socialLinks}>
            {socialLinks.map((data, i) => (
              <Link key={i} href={data.href} target="_blank">
                {data.icon}
              </Link>
            ))}
            <CustomButton size="small">ONLINE INTAKE FORM</CustomButton>
          </div>
        </div>

        <div className={style.headerSecondRow}>
          <div className={style.navigationLinks}>
            {navbarLinks.map((data, i) => (
              <Link key={i} href={data.href}>
                {data.label}
              </Link>
            ))}
          </div>

          <div className={style.contactLinks}>
            {contacts.map((contact, i) => (
              <div key={i} className={style.contactLinkItem}>
                <div className={style.contactLinkItemIconWrapper}>
                  {contact.icon}
                </div>
                <h2 className={style.contactLinkItemText}>
                  {contact.textContact}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
