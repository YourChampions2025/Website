import ContactUs from "../../components/globals/general/contact-us/contact-us";
import PageHeader from "../../components/globals/layout/page-header/page-header";

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
