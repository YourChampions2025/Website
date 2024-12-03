import LearnMoreSection from "@/components/globals/general/learn-more-section/learn-more-section";
import WeGetResults from "@/components/globals/general/we-get-results/we-get-results";
import PageGridLayout from "@/components/globals/layout/page-grid-layout/page-grid-layout";
import PageHeader from "@/components/globals/layout/page-header/page-header";
import MainContentForAttorneys from "@/components/screens/for-attorneys/main-content-for-attorneys/main-content-for-attorneys";
import SideContentForAttorneys from "@/components/screens/for-attorneys/side-content-for-attorneys/side-content-for-attorneys";
import { getBiggestResults } from "@/sanity/lib/api";
import { Metadata } from "next";
import { BASE_URL } from "@/utils/constants";

export const metadata: Metadata = {
  title: "For Attorneys | Fischer & Redavid Trial Lawyers",
  description: "Partner with Fischer & Redavid Trial Lawyers. We welcome attorney referrals and co-counsel opportunities across FL, GA, and US Virgin Islands. Let's work together to maximize case value.",
  alternates: {
    canonical: `${BASE_URL}/for-attorneys`,
  },
};

export default async function ForAttorneysPage() {
  const biggestResults = await getBiggestResults();

  return (
    <main className="pt-[162px]">
      <PageHeader
        title="for attorneys"
        description="Delegate Cases, Gain Rewards"
      />
      <PageGridLayout
        mainContent={<MainContentForAttorneys />}
        sideContent={<SideContentForAttorneys />}
      />
      <WeGetResults results={biggestResults} />
      <LearnMoreSection />
    </main>
  );
}
