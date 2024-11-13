import PageGridLayout from "@/components/globals/layout/page-grid-layout/page-grid-layout";
import React from "react";
import AboutUsLayoutNavigation from "./about-us-layout-navigation";

interface AboutUsLayoutProps {
  children: React.ReactNode;
}

export default function AboutUsLayout({ children }: AboutUsLayoutProps) {
  return (
    <PageGridLayout
      reverseLayout={true}
      mainContent={
        <div className="max-w-[357px] w-full flex flex-col gap-8 pl-5 border-l border-l-[#083376]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 flex-shrink-0 bg-[#2DE046] rounded-full" />
            <h6 className="text-[18px] tracking-[calc(18px*-0.02)] uppercase font-medium">
              learn more
            </h6>
          </div>

          <AboutUsLayoutNavigation />
        </div>
      }
      sideContent={children}
    />
  );
}
