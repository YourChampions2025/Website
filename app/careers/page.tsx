import PageHeader from "@/components/globals/layout/page-header/page-header";
import PageGridLayout from "@/components/globals/layout/page-grid-layout/page-grid-layout";
import MainContentCareers from "@/components/screens/careers/main-content-careers/main-content-careers";
import SideContentCareers from "@/components/screens/careers/side-content-careers/side-content-careers";
import LearnMoreSection from "@/components/globals/general/learn-more-section/learn-more-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Fischer & Redavid Trial Lawyers",
  description: "",
};

export default function CareersPage() {
  return (
    <main className="pt-[162px]">
      <PageHeader title="careers" />
      <PageGridLayout
        mainContent={<MainContentCareers />}
        sideContent={<SideContentCareers />}
      />
      <LearnMoreSection />
    </main>
  );
}
