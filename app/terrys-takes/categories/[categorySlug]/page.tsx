import ContactUs from "@/components/globals/general/contact-us/contact-us";
import PageHeader from "@/components/globals/layout/page-header/page-header";
import TerrysTakesListing from "@/components/screens/terrys-takes/terrys-takes-listing/terrys-takes-listing";
import { getFilteredCases } from "@/sanity/lib/api";
import { CaseProps } from "@/types/types";
import React from "react";

export default async function BlogPageListingByCategory({
  params,
  searchParams,
}: {
  params: Promise<{
    categorySlug: string;
  }>;
  searchParams: Promise<{
    limit?: string;
  }>;
}) {
  const { categorySlug } = await params;
  const { limit = "12" } = await searchParams;
  const { cases, totalCases }: { cases: CaseProps[]; totalCases: number } =
    await getFilteredCases(parseInt(limit), undefined, categorySlug, undefined);

  return (
    <main className="pt-[162px]">
      <PageHeader
        title="terry's takes"
        description={`Filtered by category: ${categorySlug.replace(/-/g, " ")}`}
      />
      <TerrysTakesListing cases={cases} totalCases={totalCases} />
      <ContactUs />
    </main>
  );
}
