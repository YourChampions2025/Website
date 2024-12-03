import SlugLayout from "@/components/screens/about-us/slug/slug-layout/slug-layout";
import { getProfileBySlug } from "@/sanity/lib/api";
import { ProfileProps } from "@/types/types";
import { Metadata } from "next";
import React from "react";
import { BASE_URL } from "@/utils/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;

    const profile: ProfileProps = await getProfileBySlug(slug);

    return {
      title: `${profile.name} | Fischer Redavid PLLC`,
      description: `${profile.name} - Contact Fischer Redavid PLLC for a free consultation by clicking through to this page!`,
      alternates: {
        canonical: `${BASE_URL}/about-us/${profile.type === 'Attorneys' ? 'our-attorneys' : 'our-staff'}/${profile.slug}`,
      },
    };
  } catch (error) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist",
    };
  }
}

export default async function OurAttorneysSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const profile: ProfileProps = await getProfileBySlug(slug);

  return <SlugLayout profile={profile} />;
}
