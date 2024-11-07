"use client";

import ContactUs from "@/components/globals/general/contact-us/contact-us";
import PageGridLayout from "@/components/globals/layout/page-grid-layout/page-grid-layout";
import AboutUsHero from "@/components/screens/about-us/hero-about-us/about-us-hero";
import MainContentAboutUs from "@/components/screens/about-us/main-content-about-us/main-content-about-us";
import SidecontentAboutUs from "@/components/screens/about-us/side-content-about-us/side-content-about-us";
import React, { useState } from "react";

function AboutUs() {
  const [activeLink, setActiveLink] = useState("the firm");
  const links = ["the firm", "attorneys", "staff"];

  return (
    <div>
      <AboutUsHero />
      <PageGridLayout
        reverseLayout={true}
        mainContent={
          <MainContentAboutUs
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            links={links}
          />
        }
        sideContent={<SidecontentAboutUs activeLink={activeLink} />}
      />
      <ContactUs />
    </div>
  );
}

export default AboutUs;
