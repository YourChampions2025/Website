import type { VideoCenterProps } from "@/types/types";
import React from "react";
import Link from "next/link";
import { videoCenterPaths } from "@/utils/constants";
import CardImage from "@/public/images/video-center-placeholder.png";
import Image from "next/image";

interface VideoCenterCardProps {
  video: VideoCenterProps;
}

export default function VideoCenterCard({ video }: VideoCenterCardProps) {
  const isPodcast = video.category === "Podcast";

  return (
    <Link
      href={`/video-center/${videoCenterPaths[video.category as keyof typeof videoCenterPaths]}/${
        video.slug
      }`}
      className="w-full h-full bg-[#1A1B21] rounded-md p-8 flex flex-col gap-8 group"
    >
      <div className="w-full h-fit aspect-video overflow-hidden">
        <Image
          className="w-full h-fit object-cover group-hover:scale-110 transition-all duration-300"
          src={CardImage}
          alt={video.title}
        />
      </div>

      <div className="w-full mt-auto flex flex-col gap-2 items-start">
        <p className="text-[#2DE046] text-[16px] tracking-[calc(16px*-0.02)] uppercase">
          {isPodcast && `Episode ${video.episodeNumber} - `}
          {new Date(video.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <h3 className="font-medium text-[26px] tracking-[calc(26px*-0.02)] text-white">
          {video.title}
        </h3>
      </div>
    </Link>
  );
}
