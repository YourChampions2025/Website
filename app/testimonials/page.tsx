import Header from "@/components/globals/header/header";
import Navbar from "@/components/globals/navbar/navbar";
import styles from "./testimonial.module.css";
import React from "react";
import TestimonialsCustomers from "@/components/screens/testimonials/testimonialsCustomers/testimonials-customers";
import ServiceContractForm from "@/components/globals/form/contract-services/service-contract";
import LoadMore from "@/components/globals/buttons/lead-more/load-more";

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

      <div>
        <LoadMore textButton="load more testimonials" />
      </div>
      {/* <button className={styles.loadMore}>load more testimonials</button> */}

      <div>teste</div>
      <div>teste</div>
      <div>teste</div>
      <div>teste</div>
      <div>teste</div>
      <div>teste</div>
      <div>teste</div>
    </div>
  );
}

export default Testimonials;
