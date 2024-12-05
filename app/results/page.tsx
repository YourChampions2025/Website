import ContactUs from "@/components/globals/general/contact-us/contact-us";
import PageHeader from "@/components/globals/layout/page-header/page-header";
import ResultsFilter from "@/components/screens/results/results-filter/results-filter";
import ResultsListing from "@/components/screens/results/results-listing/results-listing";
import { getFilteredResults } from "@/sanity/lib/api";
import { ResultProps } from "@/types/types";
import { Metadata } from "next";
import { BASE_URL } from "@/utils/constants";

interface GenerateMetadataProps {
  searchParams: Promise<{ category?: string; limit?: string; title?: string }>;
}

export async function generateMetadata({
  searchParams,
}: GenerateMetadataProps): Promise<Metadata> {
  const { category, title } = await searchParams;
  const { totalResults } = await getFilteredResults(1, title, category);

  let metaTitle =
    "Case Results & Settlements | Fischer & Redavid Trial Lawyers";
  let description = `Browse our track record of ${totalResults}+ successful cases and settlements. Our trial attorneys have recovered millions for clients across FL, GA, and US Virgin Islands.`;

  if (category) {
    const categoryName = category.replace(/-/g, " ");
    metaTitle = `${categoryName} Case Results | Fischer & Redavid Trial Lawyers`;
    description = `Explore our successful ${categoryName.toLowerCase()} cases and settlements. See how we've helped clients get the compensation they deserve.`;
  }

  return {
    title: metaTitle,
    description,
    alternates: {
      canonical: `${BASE_URL}/results${category ? `?category=${category}` : ""}`,
    },
  };
}

export default async function ResultsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; limit?: string; title?: string }>;
}) {
  const { category, limit = "12", title } = await searchParams;

  const {
    results,
    totalResults,
  }: { results: ResultProps[]; totalResults: number } =
    await getFilteredResults(parseInt(limit), title, category);

  return (
    <main className="pt-[162px]">
      <PageHeader title="case success" />
      <ResultsFilter />
      <ResultsListing results={results} totalResults={totalResults} />
      <ContactUs />
    </main>
  );
}
