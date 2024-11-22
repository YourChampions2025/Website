import DynamicDataPrevBackNextButtons from "@/components/globals/general/dynamic-data-prev-back-next-buttons/dynamic-data-prev-back-next-buttons";
import LearnMoreSection from "@/components/globals/general/learn-more-section/learn-more-section";
import PageGridLayout from "@/components/globals/layout/page-grid-layout/page-grid-layout";
import BlogSlugHero from "@/components/screens/blog/[slug]/blog-slug-hero/blog-slug-hero";
import MainContentBlogSlug from "@/components/screens/blog/[slug]/main-content-blog-slug/main-content-blog-slug";
import SideContentBlogSlug from "@/components/screens/blog/[slug]/side-content-blog-slug/side-content-blog-slug";
import { getTerrysTakesBySlug } from "@/sanity/lib/api";
import { CaseProps } from "@/types/types";
import type { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ terrysTakesSlug: string }>;
}): Promise<Metadata> {
  try {
    const { terrysTakesSlug } = await params;

    const { caseItem }: { caseItem: CaseProps } =
      await getTerrysTakesBySlug(terrysTakesSlug);

    return {
      title: `${caseItem.title} | Fischer Redavid PLLC`,
      description: caseItem.description,
    };
  } catch (error) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist",
    };
  }
}

export default async function TerrysTakesSlugPage({
  params,
}: {
  params: Promise<{ courtSlug: string; terrysTakesSlug: string }>;
}) {
  const { terrysTakesSlug } = await params;

  const { caseItem }: { caseItem: CaseProps } =
    await getTerrysTakesBySlug(terrysTakesSlug);

  return (
    <main>
      <BlogSlugHero />
      <PageGridLayout
        mainContent={
          <MainContentBlogSlug
            author={caseItem.author}
            date={caseItem.date}
            title={caseItem.title}
            content={caseItem.content}
            court={caseItem.court}
            categories={caseItem.categories}
            type="terrys-takes"
          />
        }
        sideContent={<SideContentBlogSlug />}
      />
      <DynamicDataPrevBackNextButtons
        prev={caseItem?.prev}
        next={caseItem?.next}
        type="terrys-takes"
      />
      <LearnMoreSection />
    </main>
  );
}
