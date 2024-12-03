import LearnMoreSection from "@/components/globals/general/learn-more-section/learn-more-section";
import PracticeAreasHero from "@/components/screens/practice-areas/practice-areas-hero/practice-areas-hero";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Our Practice Areas | Fischer Redavid PLLC",
  description:
    "The experienced personal injury attorneys at Fischer Redavid PLLC represent clients in complex legal matters. Learn about our practice areas & how we can help you.",
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

