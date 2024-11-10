import LearnMoreSection from "@/components/globals/general/learn-more-section/learn-more-section";
import PageGridLayout from "@/components/globals/layout/page-grid-layout/page-grid-layout";
import PageHeader from "@/components/globals/layout/page-header/page-header";
import BioBarAdmissions from "@/components/screens/bio/bio-bar-admissions/bio-bar-admissions";
import BioEducation from "@/components/screens/bio/bio-education/bio-education";
import MainContentBio from "@/components/screens/bio/main-content-bio/main-content-bio";
import SideContentBio from "@/components/screens/bio/side-content-bio/side-content-bio";
import React from "react";

function Bio() {
  return (
    <main className="pt-[162px]">
      <PageHeader title="John Fischer, Esq." description="founding partner" />
      <PageGridLayout
        mainContent={<MainContentBio />}
        sideContent={<SideContentBio />}
      />
      <PageGridLayout
        identicalColumns
        mainContent={<BioEducation />}
        sideContent={<BioBarAdmissions />}
      />
      <LearnMoreSection />
    </main>
  );
}

export default Bio;
