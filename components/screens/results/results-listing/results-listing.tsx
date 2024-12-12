import { ResultProps } from "@/types/types";
import React from "react";
import { IoTriangle } from "react-icons/io5";
import LoadMoreDynamicDataConnected from "@/components/globals/general/load-more-dynamic-data-connected/load-more-dynamic-data-connected";
import Link from "next/link";

interface ResultsListingProps {
  results: ResultProps[];
  totalResults: number;
}

export default function ResultsListing({
  results,
  totalResults,
}: ResultsListingProps) {
  return (
    <div className="w-full flex flex-col border-t border-[#083376]">
      <div className="w-full flex flex-col">
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3">
          {results.map((result, index) => (
            <div
              key={index}
              className="w-full h-full px-[clamp(16px,5.33vw,48px)] py-[clamp(32px,7.11vw,64px)] flex flex-col items-center [&:nth-child(3n+2)]:border-l-0 md:[&:nth-child(3n+2)]:border-l [&:nth-child(3n+2)]:border-r-0 md:[&:nth-child(3n+2)]:border-r border-b border-[#083376]"
            >
              <h6 className="font-serif text-[clamp(32px,6.66vw,60px)] text-center text-pretty">
                {result.title}
              </h6>
              {result.subtitle && (
                <p className="uppercase text-[clamp(16px,2.44vw,22px)] tracking-[calc(clamp(16px,2.44vw,22px)*-0.02)] text-[#CECECE] text-pretty text-center mt-6 mb-8">
                  {result.subtitle}
                </p>
              )}

              {result.content && (
                <Link
                  href={`/results/${result.slug}`}
                  className="flex items-center justify-center gap-2 uppercase text-[clamp(14px,2vw,18px)] tracking-[calc(clamp(14px,2vw,18px)*-0.02)] text-pretty underline"
                >
                  <IoTriangle className="shrink-0 rotate-90 text-[#1055C1]" />
                  read more
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      <LoadMoreDynamicDataConnected
        itemsLength={results.length}
        totalItems={totalResults}
        title="More Wins"
      />
    </div>
  );
}
