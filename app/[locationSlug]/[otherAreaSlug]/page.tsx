import { getOtherAreaBySlugs } from "@/sanity/lib/api";
import { LocationProps, OtherAreaProps } from "@/types/types";
import React from "react";
import LocationSlugLayout from "@/components/screens/locations-slug/location-slug-layout/location-slug-layout";
import { Metadata } from "next";
import { BASE_URL } from "@/utils/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locationSlug: string; otherAreaSlug: string }>;
}): Promise<Metadata> {
  try {
    const { locationSlug, otherAreaSlug } = await params;

    const result = await getOtherAreaBySlugs(locationSlug, otherAreaSlug);

    if (!result) {
      throw new Error('Not found');
    }

    const { otherAreaItem, locationItem, allLocations } = result;

    // Use the first location that has this area as the canonical base
    const primaryLocationSlug = allLocations?.[0]?.slug || locationSlug;

    return {
      title: otherAreaItem.title,
      description: otherAreaItem.description,
      alternates: {
        canonical: `${BASE_URL}/${primaryLocationSlug}/${otherAreaItem.slug}`,
      },
    };
  } catch (error) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist",
    };
  }
}

export default async function OtherAreaSlugPage({
  params,
}: {
  params: Promise<{ locationSlug: string; otherAreaSlug: string }>;
}) {
  const { locationSlug, otherAreaSlug } = await params;

  const result = await getOtherAreaBySlugs(locationSlug, otherAreaSlug);

  if (!result) {
    throw new Error('Not found');
  }

  const { otherAreaItem, locationItem } = result;

  return (
    <LocationSlugLayout
      title={otherAreaItem.title}
      excerpt={otherAreaItem.excerpt}
      content={otherAreaItem.content}
      locationSlug={locationSlug}
      otherAreas={locationItem.otherAreas}
    />
  );
}
