import { getLocationsBySlug } from "@/sanity/lib/api";
import { LocationProps } from "@/types/types";
import React from "react";
import LocationSlugLayout from "@/components/screens/locations-slug/location-slug-layout/location-slug-layout";

export default async function LocationsSlugPage({
  params,
}: {
  params: Promise<{ locationSlug: string }>;
}) {
  const { locationSlug } = await params;

  const { locationItem }: { locationItem: LocationProps } =
    await getLocationsBySlug(locationSlug);

  return (
    <LocationSlugLayout
      isLocation={true}
      title={locationItem.title}
      excerpt={locationItem.excerpt}
      content={locationItem.content}
      locationSlug={locationSlug}
      otherAreas={locationItem.otherAreas}
    />
  );
}
