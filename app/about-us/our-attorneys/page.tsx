import ContactUs from "@/components/globals/general/contact-us/contact-us";
import AboutUsCard from "@/components/screens/about-us/about-us-card/about-us-card";
import AboutUsLayout from "@/components/screens/about-us/about-us-layout/about-us-layout";
import AboutUsHero from "@/components/screens/about-us/hero-about-us/about-us-hero";
import { getAttorneysProfiles } from "@/sanity/lib/api";
import type { ProfileProps } from "@/types/types";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Our Attorneys | Fischer & Redavid Trial Lawyers",
  description: "",
};

export default async function AboutUsOurAttorneysPage() {
  const profiles: ProfileProps[] = await getAttorneysProfiles();

  return (
    <main>
      <AboutUsHero />
      <div className="w-full h-full relative">
        <AboutUsLayout>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
            {profiles.map((profile) => (
              <AboutUsCard key={profile.slug} profile={profile} />
            ))}
          </div>
        </AboutUsLayout>

        <img
          src="/images/about-vector.svg"
          alt="Vector"
          className="absolute top-0 right-0"
        />
      </div>
      <ContactUs />
    </main>
  );
}
