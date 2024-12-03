import IntakeForm from "@/components/globals/forms/intake-form/intake-form";
import LearnMoreSection from "@/components/globals/general/learn-more-section/learn-more-section";
import PageHeader from "@/components/globals/layout/page-header/page-header";
import React from "react";
import { Metadata } from "next";
import { BASE_URL } from "@/utils/constants";

export const metadata: Metadata = {
  title: "Case Intake Form | Fischer & Redavid Trial Lawyers",
  description: "Start your case with Fischer & Redavid Trial Lawyers. Fill out our secure intake form to help us understand your situation and provide the best legal assistance possible.",
  alternates: {
    canonical: `${BASE_URL}/intake-form`,
  },
};

function IntakeFormPage() {
  return (
    <main className="pt-[162px]">
      <PageHeader title="online intake form" />
      <div className="w-full px-4 py-12 border-t border-t-[#083376] border-b border-b-[#083376]">
        <IntakeForm />
      </div>
      <LearnMoreSection />
    </main>
  );
}

export default IntakeFormPage;
