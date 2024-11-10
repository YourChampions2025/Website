"use client";

import LoadMoreDynamicData from "@/components/globals/general/load-more-dynamic-data/load-more-dynamic-data";
import { ResultProps } from "@/types/types";
import { useRouter, useSearchParams } from "next/navigation";

interface ResultsListingLoadMoreButtonProps {
  results: ResultProps[];
  totalResults: number;
}

export default function ResultsListingLoadMoreButton({
  results,
  totalResults,
}: ResultsListingLoadMoreButtonProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleLoadMore = () => {
    const params = new URLSearchParams(searchParams.toString());
    const currentLimit = parseInt(params.get("limit") || "12", 10);

    // Calculate new limit, ensuring we don't exceed totalResults
    const increment = 6;
    const newLimit = Math.min(currentLimit + increment, totalResults);

    params.set("limit", newLimit.toString());

    // Update the URL without reloading the page or scrolling
    router.push(`/results?${params.toString()}`, { scroll: false });
  };

  if (totalResults > results.length) {
    return (
      <LoadMoreDynamicData onClick={handleLoadMore}>
        load more
      </LoadMoreDynamicData>
    );
  } else {
    return null;
  }
}
