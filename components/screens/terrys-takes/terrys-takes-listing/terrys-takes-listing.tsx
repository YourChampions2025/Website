import React from "react";
import { CaseProps } from "@/types/types";
import { IoTriangle } from "react-icons/io5";
import Link from "next/link";
import LoadMoreDynamicDataConnected from "@/components/globals/general/load-more-dynamic-data-connected/load-more-dynamic-data-connected";

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
        <div className="w-full mx-auto grid sd:grid-cols-1 md:grid-cols-3">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="w-full h-full px-[clamp(16px,5.33vw,48px)] py-[clamp(32px,7.11vw,64px)] flex flex-col items-start gap-6 [&:nth-child(3n+2)]:border-l-0 md:[&:nth-child(3n+2)]:border-l [&:nth-child(3n+2)]:border-r-0 md:[&:nth-child(3n+2)]:border-r border-b border-[#083376]"
            >
              <p className="text-[#2DE046] text-[clamp(12px,1.77vw,16px)] tracking-[calc(clamp(12px,1.77vw,16px)*-0.02)] uppercase">
                {new Date(caseItem.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>

              <span className="text-[#8D8D8D] text-[clamp(12px,1.77vw,16px)] tracking-[calc(clamp(12px,1.77vw,16px)*-0.02)] uppercase">
                {caseItem.court?.replaceAll("-", " ") || "no court"},{" "}
                {caseItem.categories?.join(", ").replaceAll("-", " ") ||
                  "no categories"}
              </span>

              <h6 className="text-[clamp(20px,2.88vw,26px)] tracking-[calc(clamp(20px,2.88vw,26px)*-0.02)] font-medium text-left">
                {caseItem.title}
              </h6>

              <p className="text-[clamp(16px,2vw,18px)] tracking-[calc(clamp(16px,2vw,18px)*-0.02)] text-[#8D8D8D] text-left line-clamp-8">
                {caseItem.description}
              </p>

              <Link
                href={`/terrys-takes/jurisdictions/${caseItem?.court || "general"}/${caseItem.slug}`}
                className="flex items-center justify-center gap-2 uppercase text-[clamp(14px,2vw,18px)] tracking-[calc(clamp(14px,2vw,18px)*-0.02)] text-pretty underline"
              >
                <IoTriangle className="shrink-0 rotate-90 text-[#1055C1]" />
                read more
              </Link>
            </div>
          ))}
        </div>
      </div>
      <LoadMoreDynamicDataConnected
        itemsLength={cases.length}
        totalItems={totalCases}
      />
    </div>
  );
}
