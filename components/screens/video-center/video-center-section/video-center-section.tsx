import type { VideoCenterProps } from "@/types/types";
import Link from "next/link";
import React from "react";
import { IoTriangle } from "react-icons/io5";
import VideoCenterCard from "../video-center-card/video-center-card";
import { videoCenterPaths } from "@/utils/constants";

interface VideoCenterSectionProps {
  type: string;
  videos: VideoCenterProps[];
  hasViewMore?: boolean;
}

export default function VideoCenterSection({
  type,
  videos,
  hasViewMore = true,
}: VideoCenterSectionProps) {
  return (
    <div className="max-w-[1503px] w-full mx-auto">
      {hasViewMore && (
        <div className="w-full flex items-center justify-between border-b border-[#083376] pb-6 mb-6">
          <h2 className="font-serif text-[42px] tracking-[calc(42px*-0.02)] text-white">
            {type}
          </h2>

          <Link
            href={`/video-center/${videoCenterPaths[type as keyof typeof videoCenterPaths]}`}
            className="flex items-center justify-center gap-2 uppercase text-[18px] tracking-[calc(18px*-0.02)] text-pretty underline"
          >
            <IoTriangle className="shrink-0 rotate-90 text-[#1055C1]" />
            View more
          </Link>
        </div>
      )}

      <div className="w-full grid grid-cols-2 gap-6">
        {videos.map((video) => (
          <VideoCenterCard key={video.slug} video={video} />
        ))}
      </div>
    </div>
  );
}
