"use client";
import PageGridLayout from "@/components/globals/layout/page-grid-layout/page-grid-layout";
import Image from "next/image";
import React, { Fragment } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface SlugLayoutSliderProps {
  awards: { awardsImageUrl: string }[];
}

export default function SlugLayoutSlider({ awards }: SlugLayoutSliderProps) {
  return (
    <PageGridLayout
      mainContent={
        <div className="w-full flex flex-col items-start pointer-events-none">
          <Swiper
            slidesPerView="auto"
            autoplay={{
              delay: 100,
              disableOnInteraction: true,
            }}
            speed={40000}
            modules={[Autoplay]}
            spaceBetween={72}
            className="logo-slider !max-w-full !w-full !z-50"
            loop
          >
            {[...awards, ...awards, ...awards, ...awards].map(
              (award, index) => (
                <SwiperSlide key={index} className="!w-fit">
                  <Image
                    width={400}
                    height={400}
                    className="w-fit object-contain h-28"
                    src={award.awardsImageUrl}
                    alt="Trophies Law Logo"
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      }
      sideContent={<Fragment />}
    />
  );
}
