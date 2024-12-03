import React from "react";
import {
  getLocations,
  getLocationsBySlug,
  getSqueezeBySlug,
  getSqueezes,
} from "@/sanity/lib/api";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationProps, SqueezeProps } from "@/types/types";
import LocationSlugLayout from "@/components/screens/locations-slug/location-slug-layout/location-slug-layout";
import SqueezeLayout from "@/components/screens/squeeze/squeeze-layout/squeeze-layout";
import { BASE_URL } from "@/utils/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locationSlug: string }>;
}): Promise<Metadata> {
  const { locationSlug } = await params;

  const locations: Pick<LocationProps, "title" | "slug">[] =
    await getLocations();
  const locationMatch = locations.find(
    (location) => location.slug === locationSlug
  );
  if (locationMatch) {
    const { locationItem }: { locationItem: LocationProps } =
      await getLocationsBySlug(locationSlug);
    return {
      title: locationItem.title,
      description: locationItem.description,
      alternates: {
        canonical: `${BASE_URL}/${locationItem.slug}`,
      },
    };
  }

  const squeezes: Pick<SqueezeProps, "title" | "slug">[] = await getSqueezes();
  const squeezeMatch = squeezes.find(
    (squeeze) => squeeze.slug === locationSlug
  );
  if (squeezeMatch) {
    const squeezeItem: SqueezeProps = await getSqueezeBySlug(locationSlug);
    return {
      title: `${squeezeItem.title} | Fischer & Redavid Trial Lawyers`,
      description: squeezeItem.description,
      alternates: {
        canonical: `${BASE_URL}/${squeezeItem.slug}`,
      },
    };
  }

  return {
    title: "Not Found",
    description: "The page you are looking for does not exist.",
  };
}

export default async function LocationsSlugPage({
  params,
}: {
  params: Promise<{ locationSlug: string }>;
}) {
  const { locationSlug } = await params;

  const locations: Pick<LocationProps, "title" | "slug">[] =
    await getLocations();
  const locationMatch = locations.find(
    (location) => location.slug === locationSlug
  );
  if (locationMatch) {
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

  const squeezes: Pick<SqueezeProps, "title" | "slug">[] = await getSqueezes();
  const squeezeMatch = squeezes.find(
    (squeeze) => squeeze.slug === locationSlug
  );
  if (squeezeMatch) {
    const squeezeItem: SqueezeProps = await getSqueezeBySlug(locationSlug);
    return <SqueezeLayout squeezeItem={squeezeItem} />;
  }

  return notFound();
}
