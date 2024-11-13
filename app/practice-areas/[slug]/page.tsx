import LearnMoreSection from "@/components/globals/general/learn-more-section/learn-more-section";
import PageGridLayout from "@/components/globals/layout/page-grid-layout/page-grid-layout";
import PageHeader from "@/components/globals/layout/page-header/page-header";
import MainContentPracticeAreasSlug from "@/components/screens/practice-areas/slug/main-content-practice-areas-slug/main-content-practice-areas-slug";
import SideContentPracticeAreasSlug from "@/components/screens/practice-areas/slug/side-content-practice-areas-slug/side-content-practice-areas-slug";
import React from "react";

export default function PracticeAreasSlugPage() {
  return (
    <main className="pt-[162px]">
      <PageHeader title="Catastrophic Injuries" />
      <PageGridLayout
        mainContent={<MainContentPracticeAreasSlug />}
        sideContent={<SideContentPracticeAreasSlug />}
      />
      <LearnMoreSection />
    </main>
  );
}
