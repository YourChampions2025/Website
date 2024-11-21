'use client';

import React, { useState } from 'react';
import style from './header.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import { TbMenu } from 'react-icons/tb';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import { linksSlideUp, logoSlideUp, navBarHeight } from './header-animation';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';
import fischerLogo from '@/public/images/fischer-redavid-trial-lawyers-logo.svg';
import Image from 'next/image';

const mobilelinks = [
  {
    href: '/',
    label: 'home',
  },
  {
    href: '/about-us',
    label: 'about us',
  },
  {
    href: '/practice-areas',
    label: 'practice areas',
  },
  {
    href: '',
    label: 'resources',
    subLinks: [
      { href: '/terrys-takes', label: "Terry's Takes" },
      { href: '/careers', label: 'Careers' },
      { href: '/podcasts', label: 'Podcast' },
      { href: '/articles', label: 'Articles' },
      { href: '/testimonials', label: 'Testimonials' },
      { href: '/video-center', label: 'Video Center' },
    ],
  },
  {
    href: '/locations',
    label: 'locations',
  },
  {
    href: '/results',
    label: 'results',
  },
];

function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div>
      <div className={style.menuIcon} onClick={toggleMenu}>
        <div className={style.menuHeader}>
          <Image src={fischerLogo} alt='fischerLogo' width={175} />

          {isMenuOpen ? (
            <AiOutlineClose size={28} color='#2DE046' />
          ) : (
            <TbMenu size={28} color='#2DE046' />
          )}
        </div>
      </div>

      <motion.div
        className={classNames(style.mobileMenu, isMenuOpen ? style.open : '')}
        initial='initial'
        animate={isMenuOpen ? 'enter' : 'exit'}
        variants={navBarHeight}
        style={{ width: '100%', zIndex: 100 }}
      >
        <motion.div
          variants={logoSlideUp}
          initial='initial'
          animate={isMenuOpen ? 'enter' : 'exit'}
          onClick={toggleMenu}
        >
          <Image
            src={fischerLogo}
            alt='Fischer Redavid Logo'
            className={style.logoMobileContainer}
          />
        </motion.div>

        <motion.div
          variants={linksSlideUp}
          initial='initial'
          animate={isMenuOpen ? 'enter' : 'exit'}
          className={style.menuLinks}
        >
          {mobilelinks.map((data, i) => (
            <React.Fragment key={i}>
              {data.subLinks ? (
                <div onClick={toggleSubMenu} className={style.linkMobile}>
                  {data.label}
                  <span>
                    <MdArrowOutward color='#2DE046' />
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
                    <MdArrowOutward color='#2DE046' />
                  </span>
                </Link>
              )}
              {data.subLinks && isSubMenuOpen && (
                <div className={style.subMenu}>
                  {data.subLinks.map((subLink, j) => (
                    <Link
                      href={subLink.href}
                      onClick={toggleMenu}
                      className={style.subLinkMobile}
                      key={j}
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
