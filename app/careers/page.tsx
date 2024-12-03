import LearnMoreSection from "@/components/globals/general/learn-more-section/learn-more-section";
import PageGridLayout from "@/components/globals/layout/page-grid-layout/page-grid-layout";
import PageHeader from "@/components/globals/layout/page-header/page-header";
import MainContentCareers from "@/components/screens/careers/main-content-careers/main-content-careers";
import SideContentCareers from "@/components/screens/careers/side-content-careers/side-content-careers";
import { Metadata } from "next";
import { BASE_URL } from "@/utils/constants";

export const metadata: Metadata = {
  title: "Legal Careers | Fischer & Redavid Trial Lawyers",
  description: "Join our team of dedicated legal professionals at Fischer & Redavid Trial Lawyers. Explore career opportunities in personal injury law across FL, GA, and US Virgin Islands.",
  alternates: {
    canonical: `${BASE_URL}/careers`,
  },
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
