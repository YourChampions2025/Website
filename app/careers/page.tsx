import PageHeader from "@/components/globals/layout/page-header/page-header";
import PageGridLayout from "@/components/globals/layout/page-grid-layout/page-grid-layout";
import MainContentCareers from "@/components/screens/careers/main-content-careers/main-content-careers";
import SideContentCareers from "@/components/screens/careers/side-content-careers/side-content-careers";
import LearnMoreSection from "@/components/globals/general/learn-more-section/learn-more-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers with Fischer Redavid PLLC | Fischer Redavid PLLC",
  description:
    "Careers with Fischer Redavid PLLC - Contact Fischer Redavid PLLC for a free consultation by clicking through to this page!",
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
