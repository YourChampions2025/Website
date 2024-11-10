import PageHeader from "@/components/globals/layout/page-header/page-header";
import BlogIndexListing from "@/components/screens/blog/index/blog-index-listing/blog-index-listing";
import { getFilteredBlogs } from "@/sanity/lib/api";
import { BlogProps } from "@/types/types";
import { convertMonthToNumber } from "@/utils/functions";
import React from "react";

export default async function BlogPageListingByYear({
  params,
  searchParams,
}: {
  params: Promise<{
    yearSlug: string;
    monthSlug: string;
  }>;
  searchParams: Promise<{
    limit?: string;
  }>;
}) {
  const { yearSlug, monthSlug } = await params;
  const { limit = "12" } = await searchParams;

  const { blogs, totalBlogs }: { blogs: BlogProps[]; totalBlogs: number } =
    await getFilteredBlogs(
      parseInt(limit),
      undefined,
      undefined,
      yearSlug,
      convertMonthToNumber(monthSlug)
    );

  return (
    <main className="pt-[162px]">
      <PageHeader
        title="articles"
        description={`Filtered by date: ${monthSlug}/${yearSlug} `}
      />
      <BlogIndexListing blogs={blogs} totalBlogs={totalBlogs} />
    </main>
  );
}
