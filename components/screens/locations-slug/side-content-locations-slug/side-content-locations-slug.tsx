"use client";
import ContactUsForm from "@/components/globals/forms/contact-us-form/contact-us-form";
import SideContentHeader from "@/components/globals/layout/side-content-header/side-content-header";
import classNames from "classnames";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { cleanTitle } from "@/utils/functions";
import { FaChevronDown } from "react-icons/fa";
import Collapse from "@/components/globals/general/collapse/collapse";

interface SideContentLocationsSlugProps {
  locationSlug: string;
  links: {
    _id: string;
    title: string;
    slug: string;
    otherSubAreas: {
      _id: string;
      title: string;
      slug: string;
    }[];
  }[];
}

export default function SideContentLocationsSlug({
  links,
  locationSlug,
}: SideContentLocationsSlugProps) {
  const pathname = usePathname();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="w-full flex flex-col">
      <SideContentHeader
        title="work with your legal champions"
        description="Free & Confidential Consultation"
      />
      <ContactUsForm />

      {links && (
        <div className="w-full mt-16 flex flex-col items-center text-center">
          <h6 className="text-[clamp(24px,_2.79vw,_32px)] uppercase font-medium tracking-[calc(clamp(24px,_2.79vw,_32px)_*_-0.02)]">
            how we can help
          </h6>

          <div className="mt-8 flex flex-col gap-5">
            {links?.map((link, index) => {
              return (
                <div
                  key={`${link.slug}-${index}-${link._id}`}
                  className="w-full flex flex-col cursor-pointer"
                >
                  <Link
                    href={`/${locationSlug}/${link.slug}`}
                    replace={true}
                    className={classNames(
                      "text-[clamp(16px,1.93vw,24px)] w-full flex items-center justify-center gap-4",
                      pathname.includes(
                        link.slug.toLowerCase().replace(/\s+/g, "-")
                      )
                        ? "text-white"
                        : "text-[#8d8d8d]"
                    )}
                  >
                    {cleanTitle(link.title)}
                    {link?.otherSubAreas?.length > 0 && (
                      <FaChevronDown
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setSelectedId(
                            selectedId === link._id ? null : link._id
                          );
                        }}
                        className={`w-6 h-6 p-1.5 bg-white text-black rounded-md flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                          selectedId === link._id ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {link?.otherSubAreas?.length > 0 && (
                    <Collapse isOpen={selectedId === link._id}>
                      <div className="w-full pt-5 flex flex-col gap-5">
                        {link?.otherSubAreas?.map((otherSubArea, index) => {
                          return (
                            <Link
                              key={`${link.slug}-${otherSubArea.slug}-${index}-${otherSubArea._id}`}
                              className="text-[clamp(16px,1.66vw,18px)]"
                              href={`/${locationSlug}/${link.slug}/${otherSubArea.slug}`}
                            >
                              {cleanTitle(otherSubArea.title)}
                            </Link>
                          );
                        })}
                      </div>
                    </Collapse>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
