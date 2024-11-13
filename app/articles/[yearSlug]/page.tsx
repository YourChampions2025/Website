import ContactUs from "@/components/globals/general/contact-us/contact-us";
import PageHeader from "@/components/globals/layout/page-header/page-header";
import BlogIndexListing from "@/components/screens/blog/index/blog-index-listing/blog-index-listing";
import { getFilteredBlogs } from "@/sanity/lib/api";
import { BlogProps } from "@/types/types";
import React from "react";

export default async function BlogPageListingByYear({
  params,
  searchParams,
}: {
  params: Promise<{
    yearSlug: string;
  }>;
  searchParams: Promise<{
    limit?: string;
  }>;
}) {
  const { yearSlug } = await params;
  const { limit = "12" } = await searchParams;

  const { blogs, totalBlogs }: { blogs: BlogProps[]; totalBlogs: number } =
    await getFilteredBlogs(parseInt(limit), undefined, undefined, yearSlug);

  return (
    <main className="pt-[162px]">
      <PageHeader
        title="articles"
        description={`Filtered by year: ${yearSlug}`}
      />
      <BlogIndexListing blogs={blogs} totalBlogs={totalBlogs} />
      <ContactUs />
    </main>
  );
}
