import React from "react";
import Header from "@/components/globals/header/header";
import Navbar from "@/components/globals/navbar/navbar";
import LocationsDetails from "../../components/screens/locations/locations-details/location-details";
import ContactUs from "../../components/globals/contactUs/contact-us";

function Locations() {
  return (
    <div>
      <Header />
      <Navbar
        navbarTitle="areas we serve"
        navbarDescription="view our office locations"
      />
      <LocationsDetails />
      <ContactUs />
    </div>
  );
}

export default Locations;
