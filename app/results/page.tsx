import PageHeader from "@/components/globals/layout/page-header/page-header";
import CaseSuccessCard from "@/components/screens/case-success/case-success-card/case-success-card";
import React from "react";

function Results() {
  return (
    <main className="pt-[162px]">
      <PageHeader title="case success" description="our past results" />
      <CaseSuccessCard />
    </main>
  );
}

export default Results;
