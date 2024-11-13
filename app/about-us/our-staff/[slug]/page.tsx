import SlugLayout from "@/components/screens/about-us/slug/slug-layout/slug-layout";
import { getProfileBySlug } from "@/sanity/lib/api";
import type { ProfileProps } from "@/types/types";
import React from "react";

export default async function OurStaffSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const profile: ProfileProps = await getProfileBySlug(slug);

  return <SlugLayout profile={profile} />;
}
