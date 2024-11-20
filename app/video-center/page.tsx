import React from "react";
import {
  getPodcasts,
  getPersonalInjuryVideos,
  getAboutFischerRedavidVideos,
} from "@/sanity/lib/api";
import PageHeader from "@/components/globals/layout/page-header/page-header";
import ContactUs from "@/components/globals/general/contact-us/contact-us";
import type { VideoCenterProps } from "@/types/types";
import VideoCenterSection from "@/components/screens/video-center/video-center-section/video-center-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Video Center | Fischer Redavid PLLC",
  description:
    "Learn more about Fischer Redavid PLLC and our wide variety of legal services! Browse videos on our website today.",
};

export default async function VideoCenterPage() {
  const podcasts: VideoCenterProps[] = await getPodcasts(2);
  const personalInjuryVideos: VideoCenterProps[] =
    await getPersonalInjuryVideos(2);
  const aboutFischerRedavidVideos: VideoCenterProps[] =
    await getAboutFischerRedavidVideos(2);

  return (
    <main className="pt-[162px]">
      <PageHeader title="Video Center" hasBreadCrumb />
      <div className="w-full flex flex-col px-4 py-12 gap-24">
        <VideoCenterSection
          type="About Fischer Redavid"
          videos={aboutFischerRedavidVideos}
        />
        <VideoCenterSection type="Podcast" videos={podcasts} />
        <VideoCenterSection
          type="Personal Injury"
          videos={personalInjuryVideos}
        />
      </div>
      <ContactUs hasBorderTop />
    </main>
  );
}
