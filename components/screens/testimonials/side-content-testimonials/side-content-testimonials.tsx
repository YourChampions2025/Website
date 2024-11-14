import ContactUsForm from "@/components/globals/forms/contact-us-form/contact-us-form";
import SideContentHeader from "@/components/globals/layout/side-content-header/side-content-header";
import React from "react";

export default function SideContentTestimonials() {
  return (
    <div className="w-full flex flex-col">
      <SideContentHeader
        title="We're ready to help."
        description="Free & Confidential Consultation"
      />
      <ContactUsForm />
    </div>
  );
}
