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
    buttonLink: "#",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1673957923985-b814a9dbc03d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww",
  },
  {
    title: "our past successes",
    buttonText: "Case Results",
    buttonLink: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "real stories",
    buttonText: "testimonials",
    buttonLink: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
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
            480: {
              slidesPerView: 3,
            },
          }}
          centeredSlides
          loop
          className="!max-w-full !w-full"
          onResize={(swiper) => swiper.update()}
          centerInsufficientSlides
          onInit={handleSwiperInit}
        >
          {[...fakeData, ...fakeData, ...fakeData].map((item, index) => (
            <SwiperSlide key={`${item.buttonText}-${index}`}>
              <div
                className={classNames(
                  styles.slide,
                  activeSlide !== index && styles.inactiveSlide
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
