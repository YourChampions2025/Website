import React from "react";
import fischerLogo from "@/public/images/fischerLogo.svg";
import style from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillInstagram, AiFillTikTok, AiFillYoutube } from "react-icons/ai";
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import ActionButton from "../buttons/action-button/action-button";

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
function Header() {
  return (
    <div className={style.headerContainer}>
      <div className={style.headerContent}>
        <Image src={fischerLogo} alt="fischerLogo" />

        <div className={style.socialLinks}>
          {socialLinks.map((data, i) => (
            <Link href={data.href}>{data.icon}</Link>
          ))}
          <ActionButton label="ONLINE INTAKE FORM" />
        </div>
      </div>
    </div>
  );
}

export default Header;
