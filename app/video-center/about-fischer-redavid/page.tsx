import React from "react";
import { getAboutFischerRedavidVideos } from "@/sanity/lib/api";
import PageHeader from "@/components/globals/layout/page-header/page-header";
import ContactUs from "@/components/globals/general/contact-us/contact-us";
import type { VideoCenterProps } from "@/types/types";
import VideoCenterSection from "@/components/screens/video-center/video-center-section/video-center-section";

export default async function AboutFischerRedavidPage() {
  const aboutFischerRedavidVideos: VideoCenterProps[] =
    await getAboutFischerRedavidVideos();

  return (
    <main className="pt-[162px]">
      <PageHeader title="About Fischer Redavid" />
      <div className="w-full flex flex-col px-4 py-12 gap-24">
        <VideoCenterSection
          type="About Fischer Redavid"
          videos={aboutFischerRedavidVideos}
          hasViewMore={false}
        />
      </div>
      <ContactUs />
    </main>
  );
}
