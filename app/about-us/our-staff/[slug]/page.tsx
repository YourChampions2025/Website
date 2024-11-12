import LearnMoreSection from "@/components/globals/general/learn-more-section/learn-more-section";
import PageGridLayout from "@/components/globals/layout/page-grid-layout/page-grid-layout";
import PageHeader from "@/components/globals/layout/page-header/page-header";
import MainContentAboutUsSlug from "@/components/screens/about-us/slug/main-content-about-us-slug/main-content-about-us-slug";
import SideContentAboutUsSlug from "@/components/screens/about-us/slug/side-content-about-us-slug/side-content-about-us-slug";
import { getProfileBySlug } from "@/sanity/lib/api";
import type { ProfileProps } from "@/types/types";
import React from "react";

export default async function OurStaffSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const profiles: ProfileProps = await getProfileBySlug(slug);

  console.log(profiles);

  return (
    <main className="pt-[162px]">
      <PageHeader title={profiles?.name} description={profiles?.role} />
      <PageGridLayout
        mainContent={<MainContentAboutUsSlug />}
        sideContent={<SideContentAboutUsSlug />}
      />
      <LearnMoreSection />
    </main>
  );
}
