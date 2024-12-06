import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import type { ProfileProps } from "@/types/types";
import { getStaffProfiles } from "@/sanity/lib/api";
import Vector from "@/public/images/about-vector.svg";
import ContactUs from "@/components/globals/general/contact-us/contact-us";
import AboutUsCard from "@/components/screens/about-us/about-us-card/about-us-card";
import AboutUsLayout from "@/components/screens/about-us/about-us-layout/about-us-layout";
import AboutUsHero from "@/components/screens/about-us/hero-about-us/about-us-hero";

export const metadata: Metadata = {
  title: "Our Staff | Fischer Redavid PLLC",
  description:
    "Our Staff. If you need help with a legal case, call our team at Fischer Redavid PLLC.",
};

export default async function AboutUsOurStaffPage() {
  let profiles: ProfileProps[] = await getStaffProfiles();

  profiles = profiles.sort((a, b) => {
    const isDirectorA = a.role.toLowerCase().includes("director");
    const isDirectorB = b.role.toLowerCase().includes("director");

    if (isDirectorA && !isDirectorB) {
      return -1;
    }
    if (!isDirectorA && isDirectorB) {
      return 1;
    }
    return 0;
  });

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
