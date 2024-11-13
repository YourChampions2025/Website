import React from "react";
import style from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "../../forms/custom-button/custom-button";
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillInstagram, AiFillTikTok, AiFillYoutube } from "react-icons/ai";
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import { MdMailOutline, MdPhone } from "react-icons/md";
import fischerRedavidLogo from "@/public/images/fischer-redavid-trial-lawyers-logo.svg";
import { Menu } from "@headlessui/react";

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

function HeaderDesktop() {
  const handleScrollToContactUs = () => {
    const contactUsSection = document.getElementById("contact-us");
    if (contactUsSection) {
      contactUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className={style.headerFirstRow}>
        <Image src={fischerRedavidLogo} alt="fischerLogo" />

        <div className={style.socialLinks}>
          {socialLinks.map((data, i) => (
            <Link key={i} href={data.href} target="_blank">
              {data.icon}
            </Link>
          ))}
          <CustomButton size="small" onClick={handleScrollToContactUs}>
            ONLINE INTAKE FORM
          </CustomButton>
        </div>
      </div>

      <div className={style.headerSecondRow}>
        <div className={style.navigationLinks}>
          {navbarLinks.map((data, i) =>
            data.href === "/resources" ? (
              <Menu key={i} as="div" className="relative inline-block">
                <Menu.Button className={style.menuButton}>
                  {data.label}
                </Menu.Button>
                <Menu.Items className={style.menuItems}>
                  <Menu.Item>
                    {() => (
                      <Link href="/terrys-takes" className={style.menuItem}>
                        Terry's Takes{" "}
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {() => (
                      <Link href="/careers" className={style.menuItem}>
                        Careers
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {() => (
                      <Link href="/podcasts" className={style.menuItem}>
                        Podcast
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {() => (
                      <Link href="/articles" className={style.menuItem}>
                        Articles
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {() => (
                      <Link href="/video-center" className={style.menuItem}>
                        Video Center{" "}
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {() => (
                      <Link href="/testimonials" className={style.menuItem}>
                        Testimonials
                      </Link>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            ) : (
              <Link key={i} href={data.href} className={style.link}>
                {data.label}
              </Link>
            )
          )}
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
    </>
  );
}

export default HeaderDesktop;
