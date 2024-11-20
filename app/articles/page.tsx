import ContactUs from "@/components/globals/general/contact-us/contact-us";
import PageHeader from "@/components/globals/layout/page-header/page-header";
import BlogIndexFilter from "@/components/screens/blog/index/blog-index-filter/blog-index-filter";
import BlogIndexListing from "@/components/screens/blog/index/blog-index-listing/blog-index-listing";
import { getCategoriesForBlogs, getFilteredBlogs } from "@/sanity/lib/api";
import { BlogProps, BlogCategoryProps } from "@/types/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Blog | Fischer Redavid PLLC",
  description:
    "Stay up to date with Fischer Redavid PLLC when you follow our blog. Learn about what legal services we provide and what advantages there are to consulting with our attorneys.",
};

export default async function BlogListingPage({
  searchParams,
}: {
  searchParams: Promise<{
    category?: string;
    limit?: string;
    title?: string;
    year?: string;
  }>;
}) {
  const { category, limit = "12", title, year } = await searchParams;

  const categoriesForBlogs: BlogCategoryProps[] = await getCategoriesForBlogs();
  const { blogs, totalBlogs }: { blogs: BlogProps[]; totalBlogs: number } =
    await getFilteredBlogs(parseInt(limit), title, category, year);

  return (
    <main className="pt-[162px]">
      <PageHeader
        title="articles"
        description="keep up to date with our news"
      />
      <BlogIndexFilter categoriesForBlogs={categoriesForBlogs} />
      <BlogIndexListing blogs={blogs} totalBlogs={totalBlogs} />
      <ContactUs />
    </main>
  );
}
