import PageHeader from "@/components/globals/layout/page-header/page-header";
import PrivacyPolicyContent from "@/components/screens/privacy-policy/privacy-policy-content/privacy-policy-content";
import React from "react";
import { Metadata } from "next";
import { BASE_URL } from "@/utils/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Fischer Redavid PLLC",
  description:
    "Privacy Policy. Our legal team at Fischer Redavid PLLC has the legal experience to help you. Call us about your case today!",
  alternates: {
    canonical: `${BASE_URL}/privacy-policy`,
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="pt-[162px]">
      <PageHeader title="Privacy Policy" />
      <PrivacyPolicyContent />
    </main>
  );
}
