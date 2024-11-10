import PageHeader from "@/components/globals/layout/page-header/page-header";
import BlogIndexListing from "@/components/screens/blog/index/blog-index-listing/blog-index-listing";
import { getFilteredBlogs } from "@/sanity/lib/api";
import { BlogProps } from "@/types/types";
import React from "react";

export default async function BlogPageListingByCategory({
  params,
  searchParams,
}: {
  params: Promise<{
    categorySlug: string;
  }>;
  searchParams: Promise<{
    limit?: string;
  }>;
}) {
  const { categorySlug } = await params;
  const { limit = "12" } = await searchParams;

  const { blogs, totalBlogs }: { blogs: BlogProps[]; totalBlogs: number } =
    await getFilteredBlogs(parseInt(limit), undefined, categorySlug, undefined);

  return (
    <main className="pt-[162px]">
      <PageHeader
        title="articles"
        description={`Filtered by category: ${categorySlug.replace(/-/g, " ")}`}
      />
      <BlogIndexListing blogs={blogs} totalBlogs={totalBlogs} />
    </main>
  );
}
