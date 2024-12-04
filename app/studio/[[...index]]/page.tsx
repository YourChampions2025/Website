"use client";
import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";
import Image from "next/image";
import Logo from "@/public/images/fischer-and-redavid-sanity-logo.png";

export default function StudioPage() {
  return (
    <div className="relative">
      <div className="w-fit h-[49px] flex items-center justify-center bg-[#13141B] pr-5 fixed left-10 md:left-3 top-0 z-50">
        <Image
          className="max-w-[158px] w-full h-fit object-contain"
          src={Logo}
          alt="Fischer And Redavid Trial Lawyers"
        />
      </div>

      <div className="relative z-10">
        <NextStudio config={config} />
      </div>
    </div>
  );
}
