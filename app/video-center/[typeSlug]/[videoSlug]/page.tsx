import BreadCrumb from "@/components/globals/general/bread-crumb/bread-crumb";
import ContactUs from "@/components/globals/general/contact-us/contact-us";
import VideoCenterReactPlayer from "@/components/screens/video-center/video-center-react-player/video-center-react-player";
import { getVideoCenterBySlug } from "@/sanity/lib/api";
import { VideoCenterProps } from "@/types/types";
import classNames from "classnames";
import { Metadata } from "next";
import React from "react";
import { BASE_URL } from "@/utils/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    typeSlug: string;
    videoSlug: string;
  }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const video: VideoCenterProps = await getVideoCenterBySlug(resolvedParams.videoSlug);

  if (!video) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist",
    };
  }

  // Match the sitemap pattern for video type slugs
  const typeSlug = video.category === 'Podcast' ? 'podcast' :
    video.category === 'Personal Injury' ? 'personal-injury' :
    'about-fischer-redavid';

  return {
    title: `Video: ${video.title} | Fischer Redavid PLLC`,
    description: `Video: ${video.title}. View more videos or contact Fischer Redavid PLLC for help with your legal needs.`,
    alternates: {
      canonical: `${BASE_URL}/video-center/${typeSlug}/${video.slug}`,
    },
  };
}

export default async function VideoCenterPageListingByType({
  params,
}: {
  params: Promise<{
    videoSlug: string;
  }>;
}) {
  const { videoSlug } = await params;

  const video: VideoCenterProps = await getVideoCenterBySlug(videoSlug);

  return (
    <main className="pt-[162px]">
      <div className="w-full flex flex-col px-4 py-12">
        <div
          className={classNames(
            "w-full mx-auto flex flex-col items-start gap-8",
            video.category === "Podcast" ? "max-w-[1200px]" : "max-w-[720px] "
          )}
        >
          <div className="w-full flex flex-col items-start gap-4">
            <BreadCrumb />

            <h1 className="text-[86px] font-normal font-serif">
              {video.title}
            </h1>

            <p className="text-[16px] uppercase tracking-[calc(16px*0.02)]">
              <span className="text-[#2de046]">By</span> Fischer Redavid PLLC{" "}
              <span className="text-[#2de046]">
                |{" "}
                {new Date(video.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </p>
          </div>

          <div id="react-player-wrapper" className="w-full h-full">
            <VideoCenterReactPlayer video={video} />
          </div>
        </div>
      </div>
      <ContactUs hasBorderTop />
    </main>
  );
}
