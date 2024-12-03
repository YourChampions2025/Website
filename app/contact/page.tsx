import ContactUs from "../../components/globals/general/contact-us/contact-us";
import PageHeader from "../../components/globals/layout/page-header/page-header";
import { Metadata } from "next";
import { BASE_URL } from "@/utils/constants";

export const metadata: Metadata = {
  title: "Contact Us | Fischer & Redavid Trial Lawyers",
  description: "Get in touch with Fischer & Redavid Trial Lawyers. Schedule a free consultation with our experienced attorneys in FL, GA, and US Virgin Islands. Available 24/7 for your legal needs.",
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
};

export default function ContactUsPage() {
  return (
    <main className="pt-[162px]">
      <PageHeader
        title="Contact Us Page"
        description="Reach out to Fischer Redavid PLLC"
      />
      <ContactUs />
    </main>
  );
}
