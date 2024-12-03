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

    const {
      otherAreaItem,
      locationItem,
    }: {
      otherAreaItem: OtherAreaProps;
      locationItem: Pick<LocationProps, "otherAreas" | "slug">;
    } = await getOtherAreaBySlugs(locationSlug, otherAreaSlug);

    return {
      title: otherAreaItem.title,
      description: otherAreaItem.description,
      alternates: {
        canonical: `${BASE_URL}/${locationItem.slug}/${otherAreaItem.slug}`,
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

  const {
    otherAreaItem,
    locationItem,
  }: {
    otherAreaItem: OtherAreaProps;
    locationItem: Pick<LocationProps, "otherAreas" | "slug">;
  } = await getOtherAreaBySlugs(locationSlug, otherAreaSlug);

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
