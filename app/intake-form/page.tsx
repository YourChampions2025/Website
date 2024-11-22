import IntakeForm from "@/components/globals/forms/intake-form/intake-form";
import LearnMoreSection from "@/components/globals/general/learn-more-section/learn-more-section";
import PageHeader from "@/components/globals/layout/page-header/page-header";
import React from "react";

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
