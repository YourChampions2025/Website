import ContactUs from "@/components/globals/general/contact-us/contact-us";
import PageHeader from "@/components/globals/layout/page-header/page-header";
import BlogIndexListing from "@/components/screens/blog/index/blog-index-listing/blog-index-listing";
import { getFilteredBlogs } from "@/sanity/lib/api";
import { BlogProps } from "@/types/types";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    yearSlug: string;
  }>;
}): Promise<Metadata> {
  try {
    const { yearSlug } = await params;

    return {
      title: `Our Blog Filtered by Year: ${yearSlug} | Fischer Redavid PLLC`,
      description:
        "Stay up to date with Fischer Redavid PLLC when you follow our blog. Learn about what legal services we provide and what advantages there are to consulting with our attorneys.",
    };
  } catch (error) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist",
    };
  }
}

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
