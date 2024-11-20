"use client";
import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface SlugLayoutSliderProps {
  awards: { awardsImageUrl: string }[];
}

export default function SlugLayoutSlider({ awards }: SlugLayoutSliderProps) {
  return (
    <div className="w-full py-16 border-t border-t-[#083376] flex flex-col items-start pointer-events-none">
      <Swiper
        slidesPerView="auto"
        autoplay={{
          delay: 100,
          disableOnInteraction: true,
        }}
        speed={5000}
        modules={[Autoplay]}
        spaceBetween={32}
        breakpoints={{
          640: {
            spaceBetween: 64,
          },
        }}
        className="logo-slider !max-w-full !w-full !z-50"
        loop
      >
        {[...awards, ...awards, ...awards, ...awards].map((award, index) => (
          <SwiperSlide key={index} className="!w-fit">
            <Image
              width={400}
              height={400}
              className="w-fit object-contain h-[clamp(40px,14vw,112px)]"
              src={award.awardsImageUrl}
              alt="Trophies Law Logo"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
