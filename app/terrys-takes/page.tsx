import ContactUs from "@/components/globals/general/contact-us/contact-us";
import PageHeader from "@/components/globals/layout/page-header/page-header";
import TerrysTakesCard from "@/components/screens/terrys-takes/terrys-takes-card/terrys-takes-card";
import React from "react";

function TerrysTake() {
  return (
    <main className="pt-[162px]">
      <PageHeader
        title="terry's takes"
        description="Explore Terry's Expert Summaries"
      />
      <TerrysTakesCard />
      <ContactUs />
    </main>
  );
}

export default TerrysTake;
