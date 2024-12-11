import React from "react";
import { Metadata } from "next";
import type { ProfileProps } from "@/types/types";

import { getAttorneysProfiles } from "@/sanity/lib/api";
import Vector from "@/public/images/about-vector.svg";
import ContactUs from "@/components/globals/general/contact-us/contact-us";
import AboutUsHero from "@/components/screens/about-us/hero-about-us/about-us-hero";
import AboutUsCard from "@/components/screens/about-us/about-us-card/about-us-card";
import AboutUsLayout from "@/components/screens/about-us/about-us-layout/about-us-layout";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Fischer Redavid PLLC",
  description:
    "About. Our legal team at Fischer Redavid PLLC has the legal experience to help you. Call us about your case today!",
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

        <Image src={Vector} alt="Vector" className="absolute top-0 right-0" />
      </div>
      <ContactUs />
    </main>
  );
}
