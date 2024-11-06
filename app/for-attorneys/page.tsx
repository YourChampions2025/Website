import LearnMoreSection from "@/components/globals/general/learn-more-section/learn-more-section";
import WeGetResults from "@/components/globals/general/we-get-results/we-get-results";
import PageGridLayout from "@/components/globals/layout/page-grid-layout/page-grid-layout";
import PageHeader from "@/components/globals/layout/page-header/page-header";
import MainContentForAttorneys from "@/components/screens/for-attorneys/main-content-for-attorneys/main-content-for-attorneys";
import SideContentForAttorneys from "@/components/screens/for-attorneys/side-content-for-attorneys/side-content-for-attorneys";

export default function ForAttorneysPage() {
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
      <WeGetResults />
      <LearnMoreSection />
    </main>
  );
}
