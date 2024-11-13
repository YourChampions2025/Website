"use client";

import React, { Fragment } from "react";
import ReactPlayerYoutube from "react-player/youtube";
import ReactPlayerBase from "react-player";
import type { VideoCenterProps } from "@/types/types";
import { usePathname } from "next/navigation";

interface VideoCenterReactPlayerProps {
  video: VideoCenterProps;
}

export default function VideoCenterReactPlayer({
  video,
}: VideoCenterReactPlayerProps) {
  const isPodcast = video.category === "Podcast";

  return (
    <Fragment>
      {isPodcast ? (
        <ReactPlayerYoutube url={video.url} controls />
      ) : (
        <ReactPlayerBase url={video.videoUrl} controls />
      )}
    </Fragment>
  );
}
