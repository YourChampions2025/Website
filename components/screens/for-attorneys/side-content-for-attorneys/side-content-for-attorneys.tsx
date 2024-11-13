import ContactUsForm from "@/components/globals/forms/contact-us-form/contact-us-form";
import SideContentHeader from "@/components/globals/layout/side-content-header/side-content-header";
import React from "react";

export default function SideContentForAttorneys() {
  return (
    <div className="w-full flex flex-col">
      <SideContentHeader title="refer a case to our team" />
      <ContactUsForm />
    </div>
  );
}
