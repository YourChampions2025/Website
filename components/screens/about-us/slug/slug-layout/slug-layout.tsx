import PageGridLayout from "@/components/globals/layout/page-grid-layout/page-grid-layout";
import PageHeader from "@/components/globals/layout/page-header/page-header";
import React, { Fragment } from "react";
import MainContentAboutUsSlug from "../main-content-about-us-slug/main-content-about-us-slug";
import SideContentAboutUsSlug from "../side-content-about-us-slug/side-content-about-us-slug";
import LearnMoreSection from "@/components/globals/general/learn-more-section/learn-more-section";
import type { ProfileProps } from "@/types/types";
import ImageBadge1 from "@/public/images/about-us-slug-badge1.png";
import ImageBadge2 from "@/public/images/about-us-slug-badge2.png";
import ImageBadge3 from "@/public/images/about-us-slug-badge3.png";
import ImageBadge4 from "@/public/images/about-us-slug-badge4.png";
import ImageBadge5 from "@/public/images/about-us-slug-badge5.png";
import ImageBadge6 from "@/public/images/about-us-slug-badge6.png";
import ImageBadge7 from "@/public/images/about-us-slug-badge7.png";
import { IoTriangle } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import SlugLayoutSlider from "./slug-layout-slider";

const AS_SEEN_ON_LINKS = [
  {
    image: ImageBadge1,
    link: "https://www.sun-sentinel.com/2023/07/19/should-a-4-year-old-girl-burned-by-mcdonalds-chicken-nugget-get-15-million-broward-jury-",
  },
  {
    image: ImageBadge2,
    link: "https://www.law.com/dailybusinessreview/2019/05/10/south-florida-lawyers-score-2-1m-verdict-for-child-scarred-after-bowling-alle",
  },
  {
    image: ImageBadge3,
    link: "https://www.foxbusiness.com/lifestyle/florida-family-awarded-800000-mcdonalds-chicken-mcnugget-burned-girl",
  },
  {
    image: ImageBadge4,
    link: "https://apnews.com/article/mcdonalds-chicken-mcnugget-lawsuit-girl-burned-8a21d966b3db48089782352138538cd8",
  },
  {
    image: ImageBadge5,
    link: "https://www.frtriallawyers.com/images/in-the-news/new-york-times.2308251120550.png",
  },
  {
    image: ImageBadge6,
    link: "https://www.law.com/dailybusinessreview/2022/04/27/miami-jury-awards-2-5-million-verdict-to-driver-alleging-crash-caused-memory-/",
  },
  {
    image: ImageBadge7,
    link: "https://www.youtube.com/watch?v=s-X63Z43ioo&ab_channel=GoodMorningAmerica",
  },
];

interface SlugLayoutProps {
  profile: ProfileProps;
}

export default function SlugLayout({ profile }: SlugLayoutProps) {
  return (
    <main className="pt-[162px]">
      <PageHeader title={profile?.name} description={profile?.role} />
      <PageGridLayout
        mainContent={<MainContentAboutUsSlug profile={profile} />}
        sideContent={<SideContentAboutUsSlug />}
      />
      {profile?.awards && <SlugLayoutSlider awards={profile.awards} />}
      <PageGridLayout
        mainContent={
          <div className="w-full flex flex-col items-start">
            <p className="uppercase font-medium text-[32px] tracking-[calc(32px*-0.02)]">
              as seen on
            </p>

            <div className="w-full mt-24 flex flex-col items-start gap-7">
              {AS_SEEN_ON_LINKS.map((link) => (
                <Link
                  href={link.link}
                  key={link.link}
                  className="w-full flex items-center justify-between pb-7 border-b border-b-white/10 last-of-type:border-b-0 last-of-type:pb-0"
                >
                  <Image
                    className="w-fit max-h-[48px] object-contain"
                    src={link.image}
                    alt="as seen on"
                  />

                  <span className="flex items-center justify-center gap-2 uppercase text-[18px] tracking-[calc(18px*-0.02)] text-pretty underline flex-shrink-0">
                    <IoTriangle className="shrink-0 rotate-90 text-[#2DE046]" />
                    Read Article
                  </span>
                </Link>
              ))}
            </div>
          </div>
        }
        sideContent={<Fragment />}
      />

      <LearnMoreSection />
    </main>
  );
}
