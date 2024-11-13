"use client";

import classNames from "classnames";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const links = [
  { label: "The Firm", href: "/about-us" },
  { label: "Attorneys", href: "/about-us/our-attorneys" },
  { label: "Staff", href: "/about-us/our-staff" },
];

export default function AboutUsLayoutNavigation() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="w-full flex flex-col items-start gap-3">
      {links.map((link) => (
        <button
          key={link.href}
          className={classNames(
            "text-[#8D8D8D] text-[20px] tracking-[calc(20px*-0.02)] transition-all duration-300",
            pathname === link.href &&
              "text-white text-[24px] tracking-[calc(24px*-0.02)] font-medium"
          )}
          onClick={() =>
            router.push(link.href, {
              scroll: false,
            })
          }
        >
          {link.label}
        </button>
      ))}
    </div>
  );
}
