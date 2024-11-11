import ContactUs from "@/components/globals/general/contact-us/contact-us";
import PageHeader from "@/components/globals/layout/page-header/page-header";
import TerrysTakesListing from "@/components/screens/terrys-takes/terrys-takes-listing/terrys-takes-listing";
import { getFilteredCases } from "@/sanity/lib/api";
import { CaseProps } from "@/types/types";
import React from "react";

export default async function TerrysTakesListingByCourtPage({
  params,
  searchParams,
}: {
  params: Promise<{ courtSlug: string }>;
  searchParams: Promise<{
    limit?: string;
  }>;
}) {
  const { courtSlug } = await params;
  const { limit = "12" } = await searchParams;
  const { cases, totalCases }: { cases: CaseProps[]; totalCases: number } =
    await getFilteredCases(parseInt(limit), undefined, undefined, courtSlug);

  return (
    <main className="pt-[162px]">
      <PageHeader
        title="terry's takes"
        description={`Filtered by court: ${courtSlug.replace(/-/g, " ")}`}
      />
      <TerrysTakesListing cases={cases} totalCases={totalCases} />
      <ContactUs />
    </main>
  );
}
