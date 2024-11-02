import PageHeader from "@/components/globals/layout/page-header/page-header";
import LearnMoreSection from "@/components/globals/general/learn-more-section/learn-more-section";
import ContactUs from "@/components/globals/general/contact-us/contact-us";
import LocationsHero from "@/components/screens/locations/locations-hero/locations-hero";

function Locations() {
  return (
    <main className="pt-[162px]">
      <PageHeader
        title="areas we serve"
        description="view our office locations"
      />
      <LocationsHero />
      <LearnMoreSection hasBorderTop />
      <ContactUs hasBorderTop />
    </main>
  );
}

export default Locations;
