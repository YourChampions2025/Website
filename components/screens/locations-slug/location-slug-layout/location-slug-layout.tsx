import CustomButton from "@/components/globals/forms/custom-button/custom-button";
import PortableTextComponent from "@/components/globals/general/portable-text-component/portable-text-component";
import PageGridLayout from "@/components/globals/layout/page-grid-layout/page-grid-layout";
import PageHeader from "@/components/globals/layout/page-header/page-header";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SideContentLocationsSlug from "../side-content-locations-slug/side-content-locations-slug";
import LearnMoreSection from "@/components/globals/general/learn-more-section/learn-more-section";
import { TypedObject } from "sanity";
import LocationExcerptImage from "@/public/images/locations-excerpt-banner.png";
import { cleanTitle } from "@/utils/functions";

export default function LocationSlugLayout({
  title,
  excerpt,
  content,
  locationSlug,
  otherAreas,
  isLocation = false,
}: {
  isLocation?: boolean;
  title: string;
  excerpt?: TypedObject | TypedObject[];
  content: TypedObject | TypedObject[];
  locationSlug: string;
  otherAreas: {
    _id: string;
    title: string;
    slug: string;
    otherSubAreas: {
      _id: string;
      title: string;
      slug: string;
    }[];
  }[];
}) {
  return (
    <main className="pt-[162px]">
      <PageHeader title={isLocation ? title : cleanTitle(title)} />
      {excerpt && (
        <div className="w-full py-24 px-4 border-t border-[#083376]">
          <div className="w-full max-w-[1503px] mx-auto grid grid-cols-2 items-center gap-24">
            <div className="w-full flex flex-col">
              <PortableTextComponent content={excerpt} />

              <Link href="#contact-us" className="mt-8">
                <CustomButton>Free & Confidential Consultation</CustomButton>
              </Link>
            </div>

            <div className="w-full h-fit aspect-square">
              <Image
                className="w-full h-full object-cover"
                src={LocationExcerptImage}
                alt="John Fischer and Jordan Redavid Picture"
              />
            </div>
          </div>
        </div>
      )}
      <PageGridLayout
        mainContent={
          <div className="w-full flex flex-col items-start">
            <PortableTextComponent content={content} />
          </div>
        }
        sideContent={
          <SideContentLocationsSlug
            links={otherAreas}
            locationSlug={locationSlug}
          />
        }
      />
      <LearnMoreSection />
    </main>
  );
}
