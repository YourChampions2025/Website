import CustomButton from "@/components/globals/forms/custom-button/custom-button";
import LearnMoreSection from "@/components/globals/general/learn-more-section/learn-more-section";
import PortableTextComponent from "@/components/globals/general/portable-text-component/portable-text-component";
import PageGridLayout from "@/components/globals/layout/page-grid-layout/page-grid-layout";
import BlogSlugHero from "@/components/screens/blog/[slug]/blog-slug-hero/blog-slug-hero";
import SideContentBlogSlug from "@/components/screens/blog/[slug]/side-content-blog-slug/side-content-blog-slug";
import { getLocationsBySlug } from "@/sanity/lib/api";
import { LocationProps } from "@/types/types";
import Link from "next/link";
import React from "react";
import LocationExcerptImage from "@/public/images/locations-excerpt-banner.png";
import Image from "next/image";

export default async function LocationsSlugPage({
  params,
}: {
  params: Promise<{ locationSlug: string }>;
}) {
  const { locationSlug } = await params;

  const { locationItem }: { locationItem: LocationProps } =
    await getLocationsBySlug(locationSlug);

  console.log(locationItem);

  return (
    <main>
      <BlogSlugHero />
      {locationItem.excerpt && (
        <div className="w-full py-24 px-4">
          <div className="w-full max-w-[1503px] mx-auto grid grid-cols-2 items-center gap-24">
            <div className="w-full flex flex-col">
              <PortableTextComponent content={locationItem.excerpt} />

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
            <PortableTextComponent content={locationItem.content} />
          </div>
        }
        sideContent={<SideContentBlogSlug />}
      />
      <LearnMoreSection />
    </main>
  );
}
