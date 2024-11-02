import LearnMoreSection from "@/components/globals/general/learn-more-section/learn-more-section";
import LoadMoreDynamicData from "@/components/globals/general/load-more-dynamic-data/load-more-dynamic-data";
import PageGridLayout from "@/components/globals/layout/page-grid-layout/page-grid-layout";
import PageHeader from "@/components/globals/layout/page-header/page-header";
import MainContentTestimonials from "@/components/screens/testimonials/main-content-testimonials/main-content-testimonials";
import SideContentTestimonials from "@/components/screens/testimonials/side-content-testimonials/side-content-testimonials";

export default function TestimonialsPage() {
  return (
    <main className="pt-[162px]">
      <PageHeader
        title="testimonials"
        description="Hear Our Clients, Call Today"
      />
      <PageGridLayout
        mainContent={<MainContentTestimonials />}
        sideContent={<SideContentTestimonials />}
      />
      <LoadMoreDynamicData>load more testimonials</LoadMoreDynamicData>
      <LearnMoreSection />
    </main>
  );
}
