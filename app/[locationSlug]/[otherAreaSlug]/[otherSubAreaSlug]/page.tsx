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

    const result = await getOtherSubAreaBySlugs(
      locationSlug,
      otherAreaSlug,
      otherSubAreaSlug
    );

    if (!result) {
      throw new Error('Not found');
    }

    const { otherSubAreaItem, locationItem, allLocations } = result;

    // Find the parent other area to get its slug
    const parentOtherArea = locationItem.otherAreas?.find(
      (area: { otherSubAreas?: { slug: string }[] }) => 
        area.otherSubAreas?.some((subArea: { slug: string }) => subArea.slug === otherSubAreaItem.slug)
    );

    // Use the first location that has this sub-area as the canonical base
    const primaryLocationSlug = allLocations?.[0]?.slug || locationSlug;

    return {
      title: otherSubAreaItem.title,
      description: otherSubAreaItem.description,
      alternates: {
        canonical: `${BASE_URL}/${primaryLocationSlug}/${parentOtherArea?.slug}/${otherSubAreaItem.slug}`,
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

  const result = await getOtherSubAreaBySlugs(
    locationSlug,
    otherAreaSlug,
    otherSubAreaSlug
  );

  if (!result) {
    throw new Error('Not found');
  }

  const { otherSubAreaItem, locationItem } = result;

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
