import PageHeader from "@/components/globals/layout/page-header/page-header";
import LearnMoreSection from "@/components/globals/general/learn-more-section/learn-more-section";
import ContactUs from "@/components/globals/general/contact-us/contact-us";
import LocationsHero from "@/components/screens/locations/locations-hero/locations-hero";
import { getLocations } from "@/sanity/lib/api";
import { LocationProps } from "@/types/types";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locations | Fischer & Redavid Trial Lawyers",
  description: "",
};

export default async function LocationsPage() {
  const locations: Pick<LocationProps, "location" | "title" | "slug">[] =
    await getLocations();

  return (
    <main className="pt-[162px]">
      <PageHeader
        title="areas we serve"
        description="view our office locations"
      />
      <LocationsHero />
      <div className="w-full px-4 pt-20 pb-40">
        <div className="w-full max-w-[1500px] mx-auto flex items-start justify-between gap-x-8 gap-y-16 flex-wrap md:flex-nowrap">
          <div className="max-w-none sm:max-w-[calc(50%-16px)] md:max-w-[437px] w-full flex flex-col items-start gap-8">
            <h6 className="text-[clamp(32px,5.69vw,46px)] tracking-[calc(clamp(32px,5.69vw,46px)*-0.04)] uppercase border-b border-b-[#2de046] font-serif">
              Florida
            </h6>

            {locations
              .filter((location) => location.location === "florida")
              .map((location) => (
                <Link
                  key={location.slug}
                  href={`/${location.slug}`}
                  className="text-[clamp(16px,1.93vw,24px)]"
                >
                  {location.title}
                </Link>
              ))}
          </div>

          <div className="max-w-none sm:max-w-[calc(50%-16px)] md:max-w-[437px] w-full flex flex-col items-start gap-8">
            <h6 className="text-[clamp(32px,5.69vw,46px)] tracking-[calc(clamp(32px,5.69vw,46px)*-0.04)] uppercase border-b border-b-[#2de046] font-serif">
              Georgia
            </h6>

            {locations
              .filter((location) => location.location === "georgia")
              .map((location) => (
                <Link
                  key={location.slug}
                  href={`/${location.slug}`}
                  className="text-[clamp(16px,1.93vw,24px)]"
                >
                  {location.title}
                </Link>
              ))}
          </div>

          <div className="max-w-none sm:max-w-[calc(50%-16px)] md:max-w-[437px] w-full flex flex-col items-start gap-8">
            <h6 className="text-[clamp(32px,5.69vw,46px)] tracking-[calc(clamp(32px,5.69vw,46px)*-0.04)] uppercase border-b border-b-[#2de046] font-serif">
              US Virgin Islands
            </h6>

            {locations
              .filter((location) => location.location === "u-s-virgin-islands")
              .map((location) => (
                <Link
                  key={location.slug}
                  href={`/${location.slug}`}
                  className="text-[clamp(16px,1.93vw,24px)]"
                >
                  {location.title}
                </Link>
              ))}
          </div>
        </div>
      </div>
      <LearnMoreSection hasBorderTop />
      <ContactUs hasBorderTop />
    </main>
  );
}
