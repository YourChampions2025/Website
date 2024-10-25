import React from "react";
import Header from "@/components/globals/header/header";
import Navbar from "@/components/globals/navbar/navbar";
import ContactUs from "@/components/globals/contactUs/contact-us";
import OverviewCard from "@/components/globals/overview-card/overview-card";

function Articles() {
  return (
    <div>
      <Header />
      <Navbar
        navbarTitle="articles"
        navbarDescription="keep up to date with our news"
      />
      <OverviewCard />
      <ContactUs />
    </div>
  );
}

export default Articles;
