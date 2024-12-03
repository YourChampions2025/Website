import DynamicDataPrevBackNextButtons from "@/components/globals/general/dynamic-data-prev-back-next-buttons/dynamic-data-prev-back-next-buttons";
import LearnMoreSection from "@/components/globals/general/learn-more-section/learn-more-section";
import PageGridLayout from "@/components/globals/layout/page-grid-layout/page-grid-layout";
import BlogSlugHero from "@/components/screens/blog/[slug]/blog-slug-hero/blog-slug-hero";
import MainContentBlogSlug from "@/components/screens/blog/[slug]/main-content-blog-slug/main-content-blog-slug";
import SideContentBlogSlug from "@/components/screens/blog/[slug]/side-content-blog-slug/side-content-blog-slug";
import { getTerrysTakesBySlug } from "@/sanity/lib/api";
import { CaseProps } from "@/types/types";
import { Metadata } from "next";
import { BASE_URL } from "@/utils/constants";

interface GenerateMetadataProps {
  params: Promise<{ courtSlug: string; terrysTakesSlug: string }>;
}

export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { caseItem }: { caseItem: CaseProps } = await getTerrysTakesBySlug(resolvedParams.terrysTakesSlug);

  if (!caseItem) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist",
    };
  }

  return {
    title: `${caseItem.title} | Terry's Takes | Fischer & Redavid Trial Lawyers`,
    description: caseItem.description,
    alternates: {
      canonical: `${BASE_URL}/terrys-takes/jurisdictions/${caseItem.court || "general"}/${resolvedParams.terrysTakesSlug}`,
    },
  };
}

export default async function TerrysTakesSlugPage({
  params,
}: {
  params: Promise<{ courtSlug: string; terrysTakesSlug: string }>;
}) {
  const resolvedParams = await params;
  const { caseItem }: { caseItem: CaseProps } = await getTerrysTakesBySlug(resolvedParams.terrysTakesSlug);

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
