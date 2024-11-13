"use client";

import React from "react";
import { FaStar } from "react-icons/fa6";
import styles from "./home-testimonials.module.css";
import CustomButton from "@/components/globals/forms/custom-button/custom-button";
import Link from "next/link";
import { TestimonialProps } from "@/types/types";
import PortableTextComponent from "@/components/globals/general/portable-text-component/portable-text-component";
import { Swiper, SwiperSlide } from "swiper/react";

interface HomeTestimonialsProps {
  testimonials: TestimonialProps[];
}

function HomeTestimonials({ testimonials }: HomeTestimonialsProps) {
  return (
    <div className={styles.homeTestimonialsContainer}>
      <div className={styles.homeTestimonialsContent}>
        <h2 className={styles.headerTitle}>the results speak for themselves</h2>

        <Link href="/testimonials">
          <CustomButton color="blue" size="medium">
            explore all testimonials
          </CustomButton>
        </Link>
      </div>

      <Swiper
        spaceBetween={96}
        grabCursor
        loop
        slidesPerView="auto"
        className="!max-w-full !w-full !pl-4 2xl:!pl-[calc((100vw-1503px)/2)]"
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="!max-w-[clamp(320px,40.46vw,437px)] !w-full"
          >
            <div className={styles.testimonialsComponent}>
              <h4 className={styles.testimonialsTitle}>{testimonial.quote}</h4>

              <div className={styles.testimonalDescription}>
                <PortableTextComponent content={testimonial.testimony} />
              </div>

              <div className={styles.avaluation}>
                <p>{testimonial.name}</p>
                <div className={styles.starContainer}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>
                      <FaStar color="#2de046" size={18} />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HomeTestimonials;
