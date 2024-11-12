"use client";
import type { VideoCenterProps } from "@/types/types";
import React from "react";
import ReactPlayerYoutube from "react-player/youtube";
import ReactPlayerBase from "react-player";
import Link from "next/link";
import { videoCenterPaths } from "@/utils/constants";

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
      className="w-full h-full bg-[#1A1B21] rounded-md p-8 flex flex-col gap-8"
    >
      <div
        id="video-center-react-player"
        className="w-full h-fit aspect-video overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {isPodcast ? (
          <ReactPlayerYoutube
            light="/images/video-center-placeholder.png"
            url={video.url}
            controls
          />
        ) : (
          <ReactPlayerBase
            light="/images/video-center-placeholder.png"
            url={video.videoUrl}
            controls
          />
        )}
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
