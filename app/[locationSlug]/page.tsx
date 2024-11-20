import { getLocations, getLocationsBySlug } from "@/sanity/lib/api";
import { LocationProps } from "@/types/types";
import React from "react";
import LocationSlugLayout from "@/components/screens/locations-slug/location-slug-layout/location-slug-layout";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locationSlug: string }>;
}): Promise<Metadata> {
  try {
    const { locationSlug } = await params;

    const { locationItem }: { locationItem: LocationProps } =
      await getLocationsBySlug(locationSlug);

    return {
      title: locationItem.title,
      description: locationItem.description,
    };
  } catch (error) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist",
    };
  }
}

export default async function LocationsSlugPage({
  params,
}: {
  params: Promise<{ locationSlug: string }>;
}) {
  const { locationSlug } = await params;

  const locations: Pick<LocationProps, "location" | "title" | "slug">[] =
    await getLocations();

  if (
    !locations ||
    !locations.length ||
    !locations.find((location) => location.slug === locationSlug)
  ) {
    return notFound();
  }

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
