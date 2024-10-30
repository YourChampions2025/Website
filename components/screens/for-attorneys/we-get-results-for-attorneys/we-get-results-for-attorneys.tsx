import Link from "next/link";
import React from "react";
import { IoTriangle } from "react-icons/io5";

export default function WeGetResultsForAttorneys() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full py-12 border-b border-b-[#083376]">
        <div className="max-w-[1500px] mx-auto w-full flex items-center justify-start">
          <h2 className="text-[80px] font-serif tracking-[calc(80px*-0.04)] text-left">
            We Get Results
          </h2>
        </div>
      </div>

      <div className="w-full pl-[16px] border-b border-b-[#083376]">
        <div className="max-w-[1500px] mx-auto w-full grid grid-cols-[57.18%_42.82%]">
          <div className="w-full flex flex-col border-r border-r-[#083376]">
            <div className="w-full pt-[96px] pb-[112px] pr-[48px] flex flex-col items-start">
              <div className="w-full flex items-start justify-between">
                <h3 className="text-[54px] tracking-[calc(54px*-0.04)] border-b border-b-[#2DE046]">
                  $11.9 MILLION
                </h3>

                <Link
                  href="#"
                  className="flex items-center uppercase text-white gap-1 underline font-medium"
                >
                  <IoTriangle className="rotate-90 text-[#1055C1]" />
                  explore our case results
                </Link>
              </div>

              <div className="w-full mt-12 flex flex-col items-start gap-[24px]">
                <span className="text-[28px] tracking-[calc(28px*-0.02)]">
                  <span className="text-[#2DE046]">--x Offer</span> ($--K) /{" "}
                  <span className="text-[#8D8D8D]">Medical Negligence</span>
                </span>

                <p className="text-[22px] tracking-[calc(22px*-0.02)]">
                  Our law firm obtained a global settlement of $11.9 Million
                  from multiple at-fault parties, including corporations and
                  government agencies, for our client who was a pretrial
                  detainee in a county jail and the victim of medical negligence
                  and deliberate indifference to his serious medical needs in
                  violation of the Fourteenth Amendment.
                </p>
              </div>
            </div>

            <div className="w-full h-fit">
              <img src="/images/contact-us-image.png" alt="" />
            </div>
          </div>

          <div
            id="results-container"
            className="w-full h-[873px] py-[64px] pl-[48px] flex flex-col gap-[64px] overflow-y-auto"
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="w-full h-fit flex flex-col items-start pb-[64px] border-b border-b-[#083376] last:border-b-0 last:pb-0"
              >
                <div className="w-full flex items-start justify-between pb-[32px] mb-[32px] border-b border-b-white/10">
                  <h3 className="text-[36px] tracking-[calc(36px*-0.04)] border-b border-b-[#2DE046]">
                    $11.9 MILLION
                  </h3>

                  <span className="text-[20px] tracking-[calc(20px*-0.02)] flex flex-col items-end">
                    <span className="text-[#2DE046]">--x Offer ($--K)</span>
                    <span className="text-[#8D8D8D]">Medical Negligence</span>
                  </span>
                </div>

                <p className="text-[18px] tracking-[calc(18px*-0.02)] text-[#8D8D8D]">
                  Our law firm represented a family who suffered a life-altering
                  loss on Christmas Day. The patriarch of the family had
                  recently become a grandfather. When all the family gathered at
                  his house for Christmas festivities, he and his adult son ran
                  out to the local gas station to grab soda and chips.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
