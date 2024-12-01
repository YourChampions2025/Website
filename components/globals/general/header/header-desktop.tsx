'use client';

import React, { useRef, useState } from 'react';
import style from './header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import CustomButton from '../../forms/custom-button/custom-button';
import { IoLogoFacebook } from 'react-icons/io5';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { FaGoogle, FaLinkedin } from 'react-icons/fa';
import { MdMailOutline, MdPhone } from 'react-icons/md';
import fischerRedavidLogo from '@/public/images/fischer-redavid-trial-lawyers-logo.svg';

import { GoTriangleDown } from 'react-icons/go';
import { FaXTwitter } from 'react-icons/fa6';

const socialLinks = [
  {
    href: 'https://www.facebook.com/FischerRedavid/',
    icon: <IoLogoFacebook size={24} />,
  },
  {
    href: 'https://www.instagram.com/your_champions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    icon: <AiFillInstagram size={24} />,
  },
  {
    href: 'https://www.linkedin.com/company/yourchampions/about/',
    icon: <FaLinkedin size={24} />,
  },
  {
    href: 'https://x.com/OnJusticePod',
    icon: <FaXTwitter size={24} />,
  },
  {
    href: 'https://www.youtube.com/@onjusticepodcast',
    icon: <AiFillYoutube size={24} />,
  },
  {
    href: '/',
    icon: <FaGoogle size={24} />,
  },
];

const navbarLinks = [
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
    href: '/resources',
    label: 'resources',
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

const contacts = [
  {
    icon: <MdPhone size={14} color='#2de046' />,
    textContact: '(888) 694-0708',
    href: 'tel:8886940708',
  },
  {
    icon: <MdMailOutline size={14} color='#2de046' />,
    textContact: 'contact@frtriallawyers.com',
    href: 'mailto:contact@frtriallawyers.com',
  },
];

interface MenuItem {
  href: string;
  label: string;
}

function HeaderDesktop() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };
  const renderMenuItems = (items: MenuItem[]) =>
    items.map((item, index) => (
      <Link key={index} href={item.href} className={style.menuItem}>
        {item.label}
      </Link>
    ));

  return (
    <>
      <div className={style.headerFirstRow}>
        <Link href='/'>
          <Image
            src={fischerRedavidLogo}
            alt='Fischer & Redavid Trial Lawyers Logo'
            width={200}
          />
        </Link>

        <div className={style.socialLinks}>
          {socialLinks.map((data, i) => (
            <Link
              className='hover:text-green-500 transition-all duration-300'
              key={i}
              href={data.href}
              target='_blank'
            >
              {data.icon}
            </Link>
          ))}
          <Link href='/intake-form'>
            <CustomButton size='small'>ONLINE INTAKE FORM</CustomButton>
          </Link>
        </div>
      </div>

      <div className={style.headerSecondRow}>
        <div className={style.navigationLinks}>
          {navbarLinks.map((data, i) => {
            if (data.href === '/practice-areas') {
              return (
                <div
                  key={i}
                  className='relative inline-block'
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className={style.menuButton}>
                    {data.label} <GoTriangleDown />
                  </button>
                  {activeDropdown === i && (
                    <div className={style.menuItems}>
                      {renderMenuItems([
                        {
                          href: '/practice-areas',
                          label: 'All Practice Areas',
                        },
                        {
                          href: '/practice-areas/catastrophic-injuries',
                          label: 'Catastrophic Injuries',
                        },
                        {
                          href: '/practice-areas/burn-injuries',
                          label: 'Burn Injuries',
                        },
                        { href: '/practice-areas/drowning', label: 'Drowning' },
                        {
                          href: '/practice-areas/traumatic-brain',
                          label: 'Traumatic Brain Injuries',
                        },
                        {
                          href: '/practice-areas/wrongful-death',
                          label: 'Wrongful Death',
                        },
                        {
                          href: '/practice-areas/medical-malpractice',
                          label: 'Medical Malpractice',
                        },
                        {
                          href: '/practice-areas/product-liability',
                          label: 'Product Liability',
                        },
                      ])}
                    </div>
                  )}
                </div>
              );
            }

            if (data.href === '/resources') {
              return (
                <div
                  key={i}
                  className='relative inline-block'
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className={style.menuButton}>
                    {data.label} <GoTriangleDown />
                  </button>
                  {activeDropdown === i && (
                    <div className={style.menuItems}>
                      {renderMenuItems([
                        { href: '/terrys-takes', label: "Terry's Takes" },
                        { href: '/careers', label: 'Careers' },
                        { href: '/podcasts', label: 'Podcast' },
                        { href: '/articles', label: 'Articles' },
                        { href: '/video-center', label: 'Video Center' },
                        { href: '/testimonials', label: 'Testimonials' },
                      ])}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link key={i} href={data.href} className={style.link}>
                {data.label}
              </Link>
            );
          })}
        </div>

        <div className={style.contactLinks}>
          {contacts.map((contact, i) => (
            <Link href={contact.href} key={i} className={style.contactLinkItem}>
              <div className={style.contactLinkItemIconWrapper}>
                {contact.icon}
              </div>
              <h2 className={style.contactLinkItemText}>
                {contact.textContact}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default HeaderDesktop;
