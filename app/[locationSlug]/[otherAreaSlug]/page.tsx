import { getOtherAreaBySlugs } from "@/sanity/lib/api";
import { LocationProps, type OtherAreaProps } from "@/types/types";
import React from "react";
import LocationSlugLayout from "@/components/screens/locations-slug/location-slug-layout/location-slug-layout";

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
