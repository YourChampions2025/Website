"use client";
import LoadMoreDynamicData from "@/components/globals/general/load-more-dynamic-data/load-more-dynamic-data";
import React from "react";
import { CaseProps } from "@/types/types";
import { useRouter, useSearchParams } from "next/navigation";

interface TerrysTakesListingLoadMoreButtonProps {
  cases: CaseProps[];
  totalCases: number;
}

export default function TerrysTakesListingLoadMoreButton({
  cases,
  totalCases,
}: TerrysTakesListingLoadMoreButtonProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleLoadMore = () => {
    const params = new URLSearchParams(searchParams.toString());
    const currentLimit = parseInt(params.get("limit") || "12", 10);

    // Calculate new limit, ensuring we don't exceed totalResults
    const increment = 6;
    const newLimit = Math.min(currentLimit + increment, totalCases);

    params.set("limit", newLimit.toString());

    // Update the URL without reloading the page or scrolling
    router.push(`/terrys-takes?${params.toString()}`, { scroll: false });
  };

  if (totalCases > cases.length) {
    return (
      <LoadMoreDynamicData onClick={handleLoadMore}>
        load more
      </LoadMoreDynamicData>
    );
  } else {
    return null;
  }
}
