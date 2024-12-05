import LearnMoreSection from "@/components/globals/general/learn-more-section/learn-more-section";
import PageGridLayout from "@/components/globals/layout/page-grid-layout/page-grid-layout";
import BlogSlugHero from "@/components/screens/blog/[slug]/blog-slug-hero/blog-slug-hero";
import MainContentBlogSlug from "@/components/screens/blog/[slug]/main-content-blog-slug/main-content-blog-slug";
import SideContentBlogSlug from "@/components/screens/blog/[slug]/side-content-blog-slug/side-content-blog-slug";
import { getResultsBySlug } from "@/sanity/lib/api";
import { ResultProps } from "@/types/types";
import { BASE_URL } from "@/utils/constants";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const result: ResultProps = await getResultsBySlug(slug);

    return {
      title: `${result.title} | Fischer Redavid PLLC`,
      description: result.description,
      alternates: {
        canonical: `${BASE_URL}/results/${slug}`,
      },
    };
  } catch (error) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist",
    };
  }
}

export default async function ResultsSlugPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;

  const result: ResultProps = await getResultsBySlug(slug);

  return (
    <main>
      <BlogSlugHero />
      <PageGridLayout
        mainContent={
          <MainContentBlogSlug
            title={result.title}
            content={result.content || []}
            categories={result.categories}
            type="results"
          />
        }
        sideContent={<SideContentBlogSlug />}
      />
      <LearnMoreSection />
    </main>
  );
}
