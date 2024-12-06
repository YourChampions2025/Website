import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

import { BASE_URL } from "@/utils/constants";
import { IoTriangle } from "react-icons/io5";
import Vector from "@/public/images/about-vector.svg";
import AboutUsImage from "@/public/images/about-us-image.png";

import ContactUs from "@/components/globals/general/contact-us/contact-us";
import AboutUsLayout from "@/components/screens/about-us/about-us-layout/about-us-layout";
import AboutUsHero from "@/components/screens/about-us/hero-about-us/about-us-hero";

export const metadata: Metadata = {
  title: "About Us | Fischer & Redavid Trial Lawyers",
  description:
    "Meet our team of experienced trial attorneys at Fischer & Redavid. Learn about our mission, values, and commitment to justice in FL, GA, and the US Virgin Islands.",
  alternates: {
    canonical: `${BASE_URL}/about-us`,
  },
};

export default function AboutUsPage() {
  return (
    <main>
      <AboutUsHero />
      <div className="w-full h-full relative">
        <AboutUsLayout>
          <div className="w-full flex flex-col items-start">
            <Image
              className="w-full h-fit object-contain"
              src={AboutUsImage}
              alt="About Us"
            />

            <h2 className="font-serif text-[32px] tracking-[calc(32px*-0.02)] text-white my-6">
              Fischer Redavid Trial Lawyers
            </h2>

            <p className="text-[#8D8D8D] text-[18px] tracking-[calc(18px*-0.02)]">
              At Fischer Redavid PLLC, we are committed to a simple goal: to
              help victims of negligence and malpractice obtain the justice they
              deserve. Our team of accomplished personal injury attorneys draws
              on diverse individual experience and a long track record of
              success in building powerful, evidence-based cases for our
              clients. Our aggressive approach, coupled with our client-first
              philosophy, has helped us earn the trust of our clients, the
              respect of our opponents, and the acclaim of some of the legal
              industries' most highly regarded organizations.
              <br />
              <br />
              If you have been injured as a result of someone else's negligent
              or wrongful conduct, your future may seem uncertain—but you do not
              have to face this uncertainty alone. Our attorneys, legal
              assistants, and support staff are prepared to guide you through
              the process, answering your questions as they arise and providing
              personalized counsel tailored to your unique situation. We believe
              in creating solid attorney-client relationships, which is why we
              intentionally limit our overall caseload, as well as the number of
              cases handled by each individual attorney. This not only allows us
              to provide a higher level of attention and communication to our
              clients, but it also ensures that we are able to devote all of our
              resources to each individual case.
            </p>

            <Link
              href="#contact-us"
              className="flex items-center justify-center gap-2 uppercase text-[clamp(14px,2vw,18px)] mt-6 tracking-[calc(clamp(14px,2vw,18px)*-0.02)] text-pretty underline"
            >
              <IoTriangle className="shrink-0 rotate-90 text-[#2DE046]" />
              schedule a call
            </Link>
          </div>
        </AboutUsLayout>
        <Image alt="Vector" src={Vector} className="absolute top-0 right-0" />
      </div>
      <ContactUs />
    </main>
  );
}
