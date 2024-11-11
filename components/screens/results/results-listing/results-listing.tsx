import { ResultProps } from "@/types/types";
import React from "react";
import { IoTriangle } from "react-icons/io5";
import ResultsListingLoadMoreButton from "./results-listing-load-more-button";

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
        <div className="w-full mx-auto grid sd:grid-cols-1 md:grid-cols-3">
          {results.map((result, index) => (
            <div
              key={index}
              className="w-full h-full px-12 py-16 flex flex-col items-center [&:nth-child(3n+2)]:border-l [&:nth-child(3n+2)]:border-r border-b border-[#083376]"
            >
              <h6 className="font-serif text-[60px] text-center">
                {result.title}
              </h6>
              {result.subtitle && (
                <p className="uppercase text-[22px] tracking-[calc(22px*-0.02)] text-[#CECECE] text-center mt-6 mb-8">
                  {result.subtitle}
                </p>
              )}
              <span className="flex items-center justify-center gap-2 uppercase text-[18px] tracking-[calc(18px*-0.02)] text-pretty underline">
                <IoTriangle className="shrink-0 rotate-90 text-[#1055C1]" />
                read more
              </span>
            </div>
          ))}
        </div>
      </div>

      <ResultsListingLoadMoreButton
        results={results}
        totalResults={totalResults}
      />
    </div>
  );
}
