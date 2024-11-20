import type { ProfileProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoTriangle } from "react-icons/io5";

interface AboutUsCardProps {
  profile: ProfileProps;
}

export default function AboutUsCard({ profile }: AboutUsCardProps) {
  return (
    <div className="w-full h-fit aspect-square flex items-end pb-5 px-8 relative overflow-hidden">
      <div className="w-full h-full absolute inset-0">
        <Image
          src={profile.imageUrl}
          alt={profile.name}
          fill
          className="object-cover"
        />
        <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-[#000000]/80 to-[#000000]/10" />
      </div>

      <div className="w-full flex flex-col items-start relative z-50">
        <h3 className="text-white text-[24px] font-medium tracking-[calc(24px*-0.02)]">
          {profile.name}
        </h3>

        <div className="w-full flex items-center justify-between pt-3 mt-3 border-t border-t-[#2DE046]">
          <p className="text-white text-[18px] tracking-[calc(18px*-0.02)] line-clamp-1 font-normal">
            {profile.role}
          </p>

          <Link
            href={`/about-us/${profile.type === "Attorneys" ? "our-attorneys" : "our-staff"}/${profile.slug}`}
            className="flex items-center justify-center gap-2 uppercase text-[clamp(14px,2vw,18px)] tracking-[calc(clamp(14px,2vw,18px)*-0.02)] text-pretty underline flex-shrink-0"
          >
            <IoTriangle className="shrink-0 rotate-90 text-[#2DE046]" />
            Read Bio
          </Link>
        </div>
      </div>
    </div>
  );
}
