import ContactUsForm from "@/components/globals/forms/contact-us-form/contact-us-form";
import LogoSlider from "@/components/globals/general/logo-slider/logo-slider";
import PortableTextComponent from "@/components/globals/general/portable-text-component/portable-text-component";
import { SqueezeProps } from "@/types/types";
import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

import ImageBadge1 from "@/public/images/about-us-slug-badge1.png";
import ImageBadge2 from "@/public/images/about-us-slug-badge2.png";
import ImageBadge3 from "@/public/images/about-us-slug-badge3.png";
import ImageBadge4 from "@/public/images/about-us-slug-badge4.png";
import ImageBadge5 from "@/public/images/about-us-slug-badge5.png";
import ImageBadge6 from "@/public/images/about-us-slug-badge6.png";
import ImageBadge7 from "@/public/images/about-us-slug-badge7.png";

import ImageLogo1 from "@/public/images/home-logo-carousel-1.png";
import ImageLogo2 from "@/public/images/home-logo-carousel-2.png";
import ImageLogo3 from "@/public/images/home-logo-carousel-3.png";
import ImageLogo4 from "@/public/images/home-logo-carousel-4.png";
import ImageLogo5 from "@/public/images/home-logo-carousel-5.png";
import ImageLogo6 from "@/public/images/home-logo-carousel-6.png";
import ImageLogo7 from "@/public/images/home-logo-carousel-7.png";
import ImageLogo8 from "@/public/images/home-logo-carousel-8.png";
import ImageLogo9 from "@/public/images/home-logo-carousel-9.png";

const LOGOS_ONE = [
  ImageBadge1,
  ImageBadge2,
  ImageBadge3,
  ImageBadge4,
  ImageBadge5,
  ImageBadge6,
  ImageBadge7,
];

const LOGOS_TWO = [
  ImageLogo1,
  ImageLogo2,
  ImageLogo6,
  ImageLogo3,
  ImageLogo7,
  ImageLogo4,
  ImageLogo8,
  ImageLogo5,
  ImageLogo9,
];

interface SqueezeLayoutProps {
  squeezeItem: SqueezeProps;
}

export default function SqueezeLayout({ squeezeItem }: SqueezeLayoutProps) {
  const {
    title,
    description,
    subTitle,
    contentTitle,
    content,
    quote,
    contactTitle,
  } = squeezeItem;

  return (
    <main className="w-full pt-[220px]">
      <div className="w-full flex flex-col items-center">
        <div className="w-full px-4 flex flex-col items-center">
          <h1 className="max-w-[1080px] w-full text-[clamp(36px,5.77vw,52px)] tracking-[calc(clamp(36px,5.77vw,52px)*0.01)] font-serif text-center text-balance">
            {title}
          </h1>
          <p className="max-w-[1080px] w-full text-[clamp(16px,2.22vw,20px)] text-[#2DE046] tracking-[calc(clamp(16px,2.22vw,20px)*-0.02)] text-center text-pretty mt-4">
            {description}
          </p>
        </div>
        <div className="w-full py-8 h-fit relative z-50 pointer-events-none">
          <LogoSlider logos={LOGOS_ONE} />
        </div>
        <div className="w-full flex flex-col items-center px-4 py-8 border-y border-[#083376]">
          <div className="max-w-[1252px] w-full flex items-center justify-between gap-4 md:gap-8 flex-col md:flex-row">
            <div className="flex items-center gap-3 text-center md:text-left">
              <div className="w-3 h-3 flex-shrink-0 rounded-full bg-[#2DE046]" />
              <p className="text-[clamp(28px,5.33vw,40px)] tracking-[calc(clamp(28px,5.33vw,40px)*0.01)] capitalize font-serif text-white text-pretty">
                {subTitle}
              </p>
            </div>
            <p className="text-center md:text-right max-w-[485px] w-full text-[clamp(16px,2vw,18px)] tracking-[calc(clamp(16px,2vw,18px)*-0.02)] text-[#8D8D8D] text-pretty">
              Our aggressive personal injury litigation strategies deliver
              results on the large complex cases other lawyers can't pursue.
            </p>
          </div>
        </div>

        <div className="w-full h-fit pt-16 px-4 flex flex-col items-center">
          <div className="max-w-[1252px] w-full grid grid-cols-1 md:grid-cols-[61%_39%] gap-12 md:gap-6">
            <div className="w-full flex flex-col">
              <div className="w-full h-fit aspect-video">
                <video
                  className="w-full h-full object-cover"
                  src="https://cg-fischer-redavid.s3.us-east-1.amazonaws.com/fischerRedavid.mp4"
                  playsInline
                  autoPlay
                  muted
                  loop
                  controls
                />
              </div>

              <div className="w-full py-10 border-b border-[#083376] flex items-start justify-between">
                <h2 className="max-w-[520px] w-full text-left text-[clamp(32px,6.22vw,56px)] tracking-[calc(clamp(32px,6.22vw,56px)*0.01)] capitalize font-serif">
                  {contentTitle}
                </h2>

                <img
                  className="w-14 h-fit object-contain"
                  src="/images/bio-details.svg"
                  alt="Vector"
                />
              </div>

              <div className="w-full mt-10">
                <PortableTextComponent content={content} />
              </div>

              <div className="w-full mt-16 bg-[#1A1B21] py-[clamp(24px,5.33vw,48px)] px-[clamp(16px,5.33vw,48px)]">
                <div className="w-full flex items-start gap-[clamp(16px,2.66vw,24px)]">
                  <div className="w-[clamp(32px,6.22vw,56px)] h-[clamp(32px,6.22vw,56px)] flex-shrink-0 text-[#2DE046] flex items-center justify-center">
                    <BiSolidQuoteAltLeft className="w-full h-full" />
                  </div>

                  <div className="w-full flex flex-col items-start gap-6">
                    <p className="text-white text-[clamp(16px,2vw,18px)] tracking-[calc(clamp(16px,2vw,18px)*-0.02)]">
                      {quote}
                    </p>
                    <p className="text-[#2DE046] uppercase text-[clamp(16px,2vw,18px)] tracking-[calc(clamp(16px,2vw,18px)*-0.02)] font-medium">
                      John Fischer & Jordan Redavid
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-14">
              <p className="text-[clamp(28px,4.88vw,44px)] tracking-[calc(clamp(28px,4.88vw,44px)*0.01)] font-serif text-pretty capitalize">
                {contactTitle}
              </p>
              <ContactUsForm />
              <div className="w-full h-fit aspect-video hidden md:block">
                <video
                  className="w-full h-full object-cover"
                  src="https://cg-fischer-redavid.s3.us-east-1.amazonaws.com/fischerRedavid.mp4#t=10"
                  playsInline
                  autoPlay
                  muted
                  loop
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pt-24 h-fit relative z-50 pointer-events-none">
          <LogoSlider logos={LOGOS_TWO} reverseDirection />
        </div>
        <div className="w-full flex flex-col items-center py-24 px-4">
          <p className="max-w-[1252px] w-full text-[clamp(12px,1.55vw,14px)] tracking-[calc(clamp(12px,1.55vw,14px)*-0.02)] text-[#8D8D8D] text-pretty">
            **ATTORNEY ADVERTISING:** The information provided on this website
            is for general informational purposes only and does not constitute
            legal advice. Fischer & Redavid does not establish an
            attorney-client relationship through this website. The attorney
            listings and advertisements on this site should not be interpreted
            as referrals or endorsements by any state agency or bar association.
            The attorneys at Fischer & Redavid do not claim any certification as
            specialists in specific fields of law. Each case is unique; previous
            results do not guarantee future outcomes. This site is designed to
            provide general information, and it is essential to assess if a
            particular attorney aligns with your legal needs. You may be
            responsible for certain costs or expenses in addition to any
            contingency fee arrangement for attorney’s fees. By using this site,
            you agree to our Terms and Conditions. This site is protected by
            reCAPTCHA, and the Google Privacy Policy and Terms of Service apply.
            <br />
            <br />
            The contents of this website and any linked or attached materials
            are meant solely for informational purposes and are not a substitute
            for legal advice on individual cases. Viewing this material does not
            create an attorney-client relationship. Selecting an attorney is a
            significant decision and should not rely solely on advertisements.
            The specific facts of your case will determine its outcome; prior
            results do not imply similar future outcomes. Each case is evaluated
            based on its unique merits. Any reports of past cases on this
            website are not intended to create unjustified expectations
            regarding any potential cases. Fischer & Redavid © 2024. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
