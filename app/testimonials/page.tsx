import LearnMoreSection from "@/components/globals/general/learn-more-section/learn-more-section";
import PageGridLayout from "@/components/globals/layout/page-grid-layout/page-grid-layout";
import PageHeader from "@/components/globals/layout/page-header/page-header";
import MainContentTestimonials from "@/components/screens/testimonials/main-content-testimonials/main-content-testimonials";
import SideContentTestimonials from "@/components/screens/testimonials/side-content-testimonials/side-content-testimonials";
import { getAllTestimonials } from "@/sanity/lib/api";
import { TestimonialProps } from "@/types/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews | Fischer Redavid PLLC",
  description:
    "Reviews - Contact Fischer Redavid PLLC for a free consultation by clicking through to this page!",
};

export default async function TestimonialsPage() {
  const testimonials: TestimonialProps[] = await getAllTestimonials();

  return (
    <main className="pt-[162px]">
      <PageHeader
        title="testimonials"
        description="Hear Our Clients, Call Today"
      />
      <PageGridLayout
        mainContent={<MainContentTestimonials testimonials={testimonials} />}
        sideContent={<SideContentTestimonials />}
      />
      <LearnMoreSection />
    </main>
  );
}
