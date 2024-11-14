import LearnMoreSection from "@/components/globals/general/learn-more-section/learn-more-section";
import PageGridLayout from "@/components/globals/layout/page-grid-layout/page-grid-layout";
import PageHeader from "@/components/globals/layout/page-header/page-header";
import MainContentPracticeAreasSlug from "@/components/screens/practice-areas/slug/main-content-practice-areas-slug/main-content-practice-areas-slug";
import SideContentPracticeAreasSlug from "@/components/screens/practice-areas/slug/side-content-practice-areas-slug/side-content-practice-areas-slug";
import { getPracticeAreaBySlug } from "@/sanity/lib/api";
import type { PracticeAreaProps } from "@/types/types";
import React from "react";

export default async function PracticeAreasSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const practiceArea: PracticeAreaProps = await getPracticeAreaBySlug(slug);

  return (
    <main className="pt-[162px]">
      <PageHeader title={practiceArea.title} />
      <PageGridLayout
        mainContent={
          <MainContentPracticeAreasSlug
            content={practiceArea.content}
            secondaryContent={practiceArea.secondaryContent}
          />
        }
        sideContent={<SideContentPracticeAreasSlug />}
      />
      <LearnMoreSection />
    </main>
  );
}
