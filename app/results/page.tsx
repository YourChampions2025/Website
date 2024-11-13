import ContactUs from "@/components/globals/general/contact-us/contact-us";
import PageHeader from "@/components/globals/layout/page-header/page-header";
import ResultsFilter from "@/components/screens/results/results-filter/results-filter";
import ResultsListing from "@/components/screens/results/results-listing/results-listing";
import { getFilteredResults } from "@/sanity/lib/api";
import { ResultProps } from "@/types/types";

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
      <PageHeader title="case success" description="our past results" />
      <ResultsFilter />
      <ResultsListing results={results} totalResults={totalResults} />
      <ContactUs />
    </main>
  );
}
