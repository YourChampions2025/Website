"use client";
import LearnMoreSection from "@/components/globals/general/learn-more-section/learn-more-section";
import PageGridLayout from "@/components/globals/layout/page-grid-layout/page-grid-layout";
import PageHeader from "@/components/globals/layout/page-header/page-header";
import BioBarAdmissions from "@/components/screens/bio/bio-bar-admissions/bio-bar-admissions";
import BioEducation from "@/components/screens/bio/bio-education/bio-education";
import MainContentBio from "@/components/screens/bio/main-content-bio/main-content-bio";
import SideContentBio from "@/components/screens/bio/side-content-bio/side-content-bio";
import React, { useEffect, useState } from "react";

function Bio() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="pt-[162px]">
      <PageHeader title="John Fischer, Esq." description="founding partner" />
      {!isMobile ? (
        <>
          <PageGridLayout
            mainContent={<MainContentBio />}
            sideContent={<SideContentBio />}
          />
          <PageGridLayout
            identicalColumns
            mainContent={<BioEducation />}
            sideContent={<BioBarAdmissions />}
          />
        </>
      ) : (
        <>
          <PageGridLayout
            identicalColumns
            mainContent={<MainContentBio />}
            sideContent={<BioEducation />}
          />
          <PageGridLayout
            mainContent={<BioBarAdmissions />}
            sideContent={<SideContentBio />}
          />
        </>
      )}
      <LearnMoreSection />
    </main>
  );
}

export default Bio;
