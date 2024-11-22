import ContactUs from "@/components/globals/general/contact-us/contact-us";
import PageHeader from "@/components/globals/layout/page-header/page-header";
import TerrysTakesFilter from "@/components/screens/terrys-takes/terrys-takes-filter/terrys-takes-filter";
import TerrysTakesListing from "@/components/screens/terrys-takes/terrys-takes-listing/terrys-takes-listing";
import { getFilteredCases } from "@/sanity/lib/api";
import { CaseProps } from "@/types/types";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Terry's Takes | Fischer Redavid PLLC",
  description:
    "Terry's Takes. Our legal team at Fischer Redavid PLLC has the legal experience to help you. Call us about your case today!",
};

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
