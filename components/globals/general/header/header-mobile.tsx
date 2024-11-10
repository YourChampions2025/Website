"use client";

import React, { useState } from "react";
import style from "./header.module.css";
import { usePathname } from "next/navigation";
import { AiOutlineClose } from "react-icons/ai";
import { TbMenu } from "react-icons/tb";
import { motion } from "framer-motion";
import classNames from "classnames";
import { linksSlideUp, logoSlideUp, navBarHeight } from "./header-animation";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

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
function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const pathname = usePathname();
  return (
    <div>
      <div className={style.menuIcon} onClick={toggleMenu}>
        <div className={style.menuHeader}>
          <img src="images/fischerLogo.svg" alt="fischerLogo" />

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
          <img
            src="images/fischerLogo.svg"
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
            <Link
              href={data.href}
              onClick={toggleMenu}
              className={style.linkMobile}
              key={i}
            >
              {data.label}
              <span>
                <MdArrowOutward color="#2DE046" />
              </span>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HeaderMobile;
