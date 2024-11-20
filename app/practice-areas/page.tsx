import LearnMoreSection from "@/components/globals/general/learn-more-section/learn-more-section";
import PracticeAreasHero from "@/components/screens/practice-areas/practice-areas-hero/practice-areas-hero";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Practice Areas | Fischer & Redavid Trial Lawyers",
  description: "",
};

function PracticeAreas() {
  return (
    <div>
      <PracticeAreasHero />
      <LearnMoreSection />
    </div>
  );
}

export default PracticeAreas;
