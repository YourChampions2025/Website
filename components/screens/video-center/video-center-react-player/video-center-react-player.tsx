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
  return (
    <Fragment>
      <ReactPlayerYoutube url={video.url} controls />
    </Fragment>
  );
}
