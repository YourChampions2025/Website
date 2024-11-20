import { getOtherSubAreaBySlugs } from "@/sanity/lib/api";
import { LocationProps, type OtherAreaProps } from "@/types/types";
import React from "react";
import LocationSlugLayout from "@/components/screens/locations-slug/location-slug-layout/location-slug-layout";

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
