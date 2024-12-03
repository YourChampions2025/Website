import ContactUs from "@/components/globals/general/contact-us/contact-us";
import PageHeader from "@/components/globals/layout/page-header/page-header";
import TerrysTakesFilter from "@/components/screens/terrys-takes/terrys-takes-filter/terrys-takes-filter";
import TerrysTakesListing from "@/components/screens/terrys-takes/terrys-takes-listing/terrys-takes-listing";
import { getFilteredCases } from "@/sanity/lib/api";
import { CaseProps } from "@/types/types";
import { Metadata } from "next";
import { BASE_URL } from "@/utils/constants";

interface GenerateMetadataProps {
  searchParams: Promise<{
    category?: string;
    court?: string;
    limit?: string;
    title?: string;
  }>;
}

export async function generateMetadata({
  searchParams,
}: GenerateMetadataProps): Promise<Metadata> {
  const { category, court } = await searchParams;
  const { totalCases } = await getFilteredCases(1, undefined, category, court);

  let title =
    "Terry's Takes | Florida Legal Case Summaries | Fischer & Redavid Trial Lawyers";
  let description = `Explore ${totalCases}+ case summaries by Terry P. Roberts, our Director of Appellate Practice. Expert analysis of cases impacting Florida injury law from all jurisdictions.`;

  if (court) {
    const courtName = court.replace(/-/g, " ");
    title = `${courtName} Case Summaries | Terry's Takes | Fischer & Redavid Trial Lawyers`;
    description = `Browse case summaries from the ${courtName}. Expert analysis by Terry P. Roberts on cases impacting Florida injury law.`;
  } else if (category) {
    const categoryName = category.replace(/-/g, " ");
    title = `${categoryName} Case Summaries | Terry's Takes | Fischer & Redavid Trial Lawyers`;
    description = `Explore ${categoryName} case summaries. Expert analysis by Terry P. Roberts on cases impacting Florida injury law.`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/terrys-takes`,
    },
  };
}

export default async function TerrysTakesListingPage({
  searchParams,
}: {
  searchParams: Promise<{
    category?: string;
    court?: string;
    limit?: string;
    title?: string;
  }>;
}) {
  const { category, court, limit = "12", title } = await searchParams;

  const { cases, totalCases }: { cases: CaseProps[]; totalCases: number } =
    await getFilteredCases(parseInt(limit), title, category, court);

  return (
    <main className="pt-[162px]">
      <PageHeader
        title="terry's takes"
        description="Explore Terry's Expert Summaries"
      />
      <TerrysTakesFilter />
      <TerrysTakesListing cases={cases} totalCases={totalCases} />
      <ContactUs />
    </main>
  );
}
