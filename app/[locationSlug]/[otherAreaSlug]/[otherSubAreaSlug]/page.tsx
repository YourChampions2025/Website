import { getOtherSubAreaBySlugs } from "@/sanity/lib/api";
import { LocationProps, OtherAreaProps } from "@/types/types";
import React from "react";
import LocationSlugLayout from "@/components/screens/locations-slug/location-slug-layout/location-slug-layout";
import { Metadata } from "next";
import { BASE_URL } from "@/utils/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    locationSlug: string;
    otherAreaSlug: string;
    otherSubAreaSlug: string;
  }>;
}): Promise<Metadata> {
  try {
    const { locationSlug, otherAreaSlug, otherSubAreaSlug } = await params;

    const {
      otherSubAreaItem,
      locationItem,
    }: {
      otherSubAreaItem: OtherAreaProps;
      locationItem: Pick<LocationProps, "otherAreas" | "slug">;
    } = await getOtherSubAreaBySlugs(
      locationSlug,
      otherAreaSlug,
      otherSubAreaSlug
    );

    // Find the parent other area to get its slug
    const parentOtherArea = locationItem.otherAreas?.find(
      area => area.otherSubAreas?.some(subArea => subArea.slug === otherSubAreaItem.slug)
    );

    return {
      title: otherSubAreaItem.title,
      description: otherSubAreaItem.description,
      alternates: {
        canonical: `${BASE_URL}/${locationItem.slug}/${parentOtherArea?.slug}/${otherSubAreaItem.slug}`,
      },
    };
  } catch (error) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist",
    };
  }
}

export default async function OtherSubAreaSlugPage({
  params,
}: {
  params: Promise<{
    locationSlug: string;
    otherAreaSlug: string;
    otherSubAreaSlug: string;
  }>;
}) {
  const { locationSlug, otherAreaSlug, otherSubAreaSlug } = await params;

  const {
    otherSubAreaItem,
    locationItem,
  }: {
    otherSubAreaItem: OtherAreaProps;
    locationItem: Pick<LocationProps, "otherAreas" | "slug">;
  } = await getOtherSubAreaBySlugs(
    locationSlug,
    otherAreaSlug,
    otherSubAreaSlug
  );

  return (
    <LocationSlugLayout
      title={otherSubAreaItem.title}
      excerpt={otherSubAreaItem.excerpt}
      content={otherSubAreaItem.content}
      locationSlug={locationSlug}
      otherAreas={locationItem.otherAreas}
    />
  );
}
