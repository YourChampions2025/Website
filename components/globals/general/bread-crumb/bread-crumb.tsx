"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Fragment } from "react";
import classNames from "classnames";

export default function BreadCrumb() {
  const pathname = usePathname();
  const pathArray = pathname.split("/").filter((path) => path);

  const generateBreadcrumb = () => {
    return pathArray.map((path, index) => {
      const href = `/${pathArray.slice(0, index + 1).join("/")}`;
      const name = path
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());

      return (
        <Fragment key={href}>
          <span> / </span>
          <Link
            className={classNames(
              "hover:underline text-[14px]",
              index === pathArray.length - 1 && "font-semibold underline"
            )}
            href={href}
          >
            {name}
          </Link>
        </Fragment>
      );
    });
  };

  return (
    <nav aria-label="breadcrumb" className="flex items-center gap-2">
      <Link className="hover:underline text-[14px]" href="/">
        Home
      </Link>
      {generateBreadcrumb()}
    </nav>
  );
}
