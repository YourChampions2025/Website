"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";

interface LogoSliderProps {
  logos: StaticImport[];
  reverseDirection?: boolean;
}

export default function LogoSlider({
  logos,
  reverseDirection = false,
}: LogoSliderProps) {
  return (
    <Swiper
      slidesPerView="auto"
      autoplay={{
        delay: 100,
        disableOnInteraction: true,
        reverseDirection,
      }}
      speed={40000}
      modules={[Autoplay]}
      spaceBetween={120}
      className="logo-slider !max-w-full !w-full !z-50"
      loop
    >
      {[...logos, ...logos].map((logo, index) => (
        <SwiperSlide key={index} className="!w-fit">
          <Image
            className="w-fit object-contain h-20"
            src={logo}
            alt="Trophies Law Logo"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
