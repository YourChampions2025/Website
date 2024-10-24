import React from "react";
import Header from "@/components/globals/header/header";
import Navbar from "@/components/globals/navbar/navbar";
import ContactUsToday from "@/components/screens/careers/contact-us-today/contact-us-today";
import ServiceContractForm from "@/components/globals/form/contract-services/service-contract";

import styles from "./careers.module.css";
function Careers() {
  return (
    <div>
      <Header />
      <Navbar
        navbarTitle="careers"
        navbarDescription="Join Our
        Client-Centric Team"
      />

      <div className={styles.careersGridContainer}>
        <div>
          <ContactUsToday />
        </div>
        <div>
          <ServiceContractForm />
        </div>
      </div>
    </div>
  );
}

export default Careers;
