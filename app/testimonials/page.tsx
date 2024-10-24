import Header from "@/components/globals/header/header";
import Navbar from "@/components/globals/navbar/navbar";
import styles from "./testimonial.module.css";
import React from "react";
import TestimonialsCustomers from "@/components/screens/testimonials/testimonialsCustomers/testimonials-customers";
import ServiceContractForm from "@/components/globals/form/contract-services/service-contract";
import LoadMore from "@/components/globals/buttons/load-more/load-more";
import Footer from "@/components/globals/footer/footer";
import LearnMore from "@/components/globals/learn-more/learn-more";

function Testimonials() {
  return (
    <div>
      <Header />
      <Navbar
        navbarTitle="testimonials"
        navbarDescription="Hear Our Clients, Call Today"
      />

      <div className={styles.testimonialsGridContainer}>
        <div>
          <TestimonialsCustomers />
        </div>
        <div>
          <ServiceContractForm />
        </div>
      </div>
      <LoadMore textButton="load more testimonials" />
      <LearnMore />
    </div>
  );
}

export default Testimonials;
