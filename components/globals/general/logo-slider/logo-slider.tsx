"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

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
      speed={6000}
      modules={[Autoplay]}
      spaceBetween={48}
      breakpoints={{
        640: {
          spaceBetween: 96,
        },
      }}
      className="logo-slider !max-w-full !w-full !z-50"
      loop
    >
      {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
        <SwiperSlide key={index} className="!w-fit">
          <Image
            className="w-fit object-contain max-w-[clamp(160px,25vw,200px)] h-[clamp(40px,7vw,56px)]"
            src={logo}
            alt="Trophies Law Logo"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
