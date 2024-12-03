import ContactUs from "@/components/globals/general/contact-us/contact-us";
import PageHeader from "@/components/globals/layout/page-header/page-header";
import VideoCenterSection from "@/components/screens/video-center/video-center-section/video-center-section";
import {
  getAboutFischerRedavidVideos,
  getPersonalInjuryVideos,
  getPodcasts,
} from "@/sanity/lib/api";
import { VideoCenterProps } from "@/types/types";
import {
  videoCenterDescriptionSEO,
  videoCenterTitle,
  videoCenterTitleSEO,
  BASE_URL,
} from "@/utils/constants";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    typeSlug: string;
  }>;
}): Promise<Metadata> {
  try {
    const { typeSlug } = await params;

    const title =
      videoCenterTitleSEO[typeSlug as keyof typeof videoCenterTitleSEO];
    const description =
      videoCenterDescriptionSEO[
        typeSlug as keyof typeof videoCenterDescriptionSEO
      ];

    return {
      title,
      description,
      alternates: {
        canonical: `${BASE_URL}/video-center/${typeSlug}`,
      },
    };
  } catch (error) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist",
    };
  }
}

export default async function VideoCenterPageListingByType({
  params,
}: {
  params: Promise<{
    typeSlug: string;
  }>;
}) {
  const { typeSlug } = await params;
  let videos: VideoCenterProps[] = [];

  if (typeSlug === "podcast") {
    videos = await getPodcasts();
  } else if (typeSlug === "personal-injury") {
    videos = await getPersonalInjuryVideos();
  } else if (typeSlug === "about-fischer-redavid") {
    videos = await getAboutFischerRedavidVideos();
  }

  return (
    <main className="pt-[162px]">
      <PageHeader
        title={videoCenterTitle[typeSlug as keyof typeof videoCenterTitle]}
        hasBreadCrumb
      />
      <div className="w-full flex flex-col px-4 py-12 gap-24">
        <VideoCenterSection
          type={videoCenterTitle[typeSlug as keyof typeof videoCenterTitle]}
          videos={videos}
          hasViewMore={false}
        />
      </div>
      <ContactUs hasBorderTop />
    </main>
  );
}
