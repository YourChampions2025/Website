"use client";
import React, { useRef, useState } from "react";
import { Swiper as SwiperCarousel, SwiperSlide } from "swiper/react";
import Swiper from "swiper";
import Link from "next/link";
import classNames from "classnames";
import { IoTriangle } from "react-icons/io5";
import styles from "./learn-more-section.module.css";

const fakeData = [
  {
    title: "meet our team",
    buttonText: "about us",
    buttonLink: "/about-us",
    imageUrl: "/images/learn-more-meet-team.png",
  },
  {
    title: "our past successes",
    buttonText: "Case Results",
    buttonLink: "/results",
    imageUrl: "/images/learn-more-past-success.png",
  },
  {
    title: "real stories",
    buttonText: "testimonials",
    buttonLink: "/testimonials",
    imageUrl: "/images/learn-more-real-stories.png",
  },
];

interface LearnMoreSectionProps {
  hasBorderTop?: boolean;
}

export default function LearnMoreSection({
  hasBorderTop,
}: LearnMoreSectionProps) {
  const swiperRef = useRef<Swiper | null>(null);
  const [activeSlide, setActiveSlide] = useState<number | null>(0);

  if (!swiperRef) {
    return null;
  }

  const handleSwiperInit = (swiper: Swiper) => {
    swiperRef.current = swiper;

    swiper.on("slideChange", () => {
      setActiveSlide?.(swiper.realIndex);
    });
  };

  return (
    <div className={styles.container}>
      <div
        className={classNames(styles.header, hasBorderTop && styles.borderTop)}
      >
        <div className={styles.headerContent}>
          <h2 className={styles.title}>Learn More</h2>
        </div>
      </div>

      <div className={styles.carouselWrapper}>
        <SwiperCarousel
          spaceBetween={0}
          slidesPerView={1}
          breakpoints={{
            900: {
              slidesPerView: 3,
            },
          }}
          centeredSlides
          loop
          className="!max-w-full !w-full !px-4 md:!px-0"
          onResize={(swiper) => swiper.update()}
          centerInsufficientSlides
          onInit={handleSwiperInit}
        >
          {[...fakeData, ...fakeData, ...fakeData].map((item, index) => (
            <SwiperSlide key={`${item.buttonText}-${index}`}>
              <div
                className={classNames(
                  styles.slide,
                  activeSlide === index
                    ? styles.activeSlide
                    : styles.inactiveSlide
                )}
              >
                <div className={styles.imageContainer}>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className={styles.image}
                  />
                </div>

                <div className={styles.titleContainer}>
                  <h6 className={styles.slideTitle}>{item.title}</h6>
                </div>

                <Link href={item.buttonLink} className={styles.link}>
                  <IoTriangle className={styles.icon} />
                  {item.buttonText}
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </SwiperCarousel>
      </div>
    </div>
  );
}
