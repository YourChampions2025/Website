import React from "react";
import { CaseProps } from "@/types/types";
import TerrysTakesListingLoadMoreButton from "./terrys-takes-listing-load-more-button";
import { IoTriangle } from "react-icons/io5";

interface TerrysTakesListingProps {
  cases: CaseProps[];
  totalCases: number;
}

export default function TerrysTakesListing({
  cases,
  totalCases,
}: TerrysTakesListingProps) {
  return (
    <div className="w-full flex flex-col border-t border-[#083376]">
      <div className="w-full flex flex-col">
        <div className="w-full mx-auto grid grid-cols-3">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="w-full h-full px-12 py-16 flex flex-col items-start gap-6 [&:nth-child(3n+2)]:border-l [&:nth-child(3n+2)]:border-r border-b border-[#083376]"
            >
              <p className="text-[#2DE046] text-[16px] tracking-[calc(16px*-0.02)] uppercase">
                {new Date(caseItem.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>

              <span className="text-[#8D8D8D] text-[16px] tracking-[calc(16px*-0.02)] uppercase">
                {caseItem.court?.replaceAll("-", " ") || "no court"},{" "}
                {caseItem.categories?.join(", ").replaceAll("-", " ") ||
                  "no categories"}
              </span>

              <h6 className="text-[26px] tracking-[calc(26px*-0.02)] font-medium text-left">
                {caseItem.title}
              </h6>

              <p className="text-[18px] tracking-[calc(18px*-0.02)] text-[#8D8D8D] text-left line-clamp-4">
                {caseItem.description}
              </p>

              <span className="flex items-center justify-center gap-2 uppercase text-[18px] tracking-[calc(18px*-0.02)] text-pretty underline">
                <IoTriangle className="shrink-0 rotate-90 text-[#1055C1]" />
                read more
              </span>
            </div>
          ))}
        </div>
      </div>

      <TerrysTakesListingLoadMoreButton cases={cases} totalCases={totalCases} />
    </div>
  );
}
