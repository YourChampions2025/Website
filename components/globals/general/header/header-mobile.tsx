"use client";

import React, { useState } from "react";
import style from "./header.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { TbMenu } from "react-icons/tb";
import { motion } from "framer-motion";
import classNames from "classnames";
import { linksSlideUp, logoSlideUp, navBarHeight } from "./header-animation";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import fischerLogo from "@/public/images/fischer-redavid-trial-lawyers-logo.svg";
import Image from "next/image";

const mobilelinks = [
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
    subLinks: [
      { href: "/practice-areas", label: "All Practice Areas" },
      {
        href: "/practice-areas/catastrophic-injuries",
        label: "Catastrophic Injuries",
      },
      { href: "/practice-areas/burn-injuries", label: "Burn Injuries" },
      { href: "/practice-areas/drowning", label: "Drowning" },
      {
        href: "/practice-areas/traumatic-brain",
        label: "Traumatic Brain Injuries",
      },
      { href: "/practice-areas/wrongful-death", label: "Wrongful Death" },
      {
        href: "/practice-areas/medical-malpractice",
        label: "Medical Malpractice",
      },
      { href: "/practice-areas/product-liability", label: "Product Liability" },
    ],
  },
  {
    href: "",
    label: "resources",
    subLinks: [
      { href: "/terrys-takes", label: "Terry's Takes" },
      { href: "/careers", label: "Careers" },
      { href: "/podcasts", label: "Podcast" },
      { href: "/articles", label: "Articles" },
      { href: "/testimonials", label: "Testimonials" },
      { href: "/video-center", label: "Video Center" },
    ],
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

function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleSubMenu = (index: number) => {
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
  };

  return (
    <div>
      <div className={style.menuIcon} onClick={toggleMenu}>
        <div className={style.menuHeader}>
          <Image src={fischerLogo} alt="fischerLogo" width={175} />

          {isMenuOpen ? (
            <AiOutlineClose size={28} color="#2DE046" />
          ) : (
            <TbMenu size={28} color="#2DE046" />
          )}
        </div>
      </div>

      <motion.div
        className={classNames(style.mobileMenu, isMenuOpen ? style.open : "")}
        initial="initial"
        animate={isMenuOpen ? "enter" : "exit"}
        variants={navBarHeight}
        style={{ width: "100%", zIndex: 100 }}
      >
        <motion.div
          variants={logoSlideUp}
          initial="initial"
          animate={isMenuOpen ? "enter" : "exit"}
          onClick={toggleMenu}
        >
          <Image
            src={fischerLogo}
            alt="Fischer Redavid Logo"
            className={style.logoMobileContainer}
          />
        </motion.div>

        <motion.div
          variants={linksSlideUp}
          initial="initial"
          animate={isMenuOpen ? "enter" : "exit"}
          className={style.menuLinks}
        >
          {mobilelinks.map((data, i) => (
            <React.Fragment key={i}>
              {data.subLinks ? (
                <div
                  onClick={() => toggleSubMenu(i)}
                  className={style.linkMobile}
                >
                  {data.label}
                  <span>
                    <MdArrowOutward color="#2DE046" />
                  </span>
                </div>
              ) : (
                <Link
                  href={data.href}
                  onClick={toggleMenu}
                  className={style.linkMobile}
                >
                  {data.label}
                  <span>
                    <MdArrowOutward color="#2DE046" />
                  </span>
                </Link>
              )}
              {data.subLinks && openSubMenuIndex === i && (
                <div className={style.subMenu}>
                  {data.subLinks.map((subLink, i) => (
                    <Link
                      href={subLink.href}
                      onClick={toggleMenu}
                      className={style.subLinkMobile}
                      key={i}
                    >
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HeaderMobile;
