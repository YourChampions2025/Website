import ContactUs from "@/components/globals/general/contact-us/contact-us";
import PageHeader from "@/components/globals/layout/page-header/page-header";
import BlogIndexFilter from "@/components/screens/blog/index/blog-index-filter/blog-index-filter";
import BlogIndexListing from "@/components/screens/blog/index/blog-index-listing/blog-index-listing";
import { getCategoriesForBlogs, getFilteredBlogs } from "@/sanity/lib/api";
import { BlogProps, BlogCategoryProps } from "@/types/types";
import { Metadata } from "next";
import { BASE_URL } from "@/utils/constants";

interface GenerateMetadataProps {
  searchParams: { category?: string; year?: string };
}

export async function generateMetadata({ searchParams }: GenerateMetadataProps): Promise<Metadata> {
  const { category, year } = searchParams;
  const categoriesForBlogs = await getCategoriesForBlogs();
  const { totalBlogs } = await getFilteredBlogs(1, undefined, category, year);

  let title = "Legal Articles & Blog | Fischer & Redavid Trial Lawyers";
  let description = `Explore ${totalBlogs}+ legal articles across ${categoriesForBlogs?.length || 'multiple'} categories. Stay informed with insights on personal injury law, legal tips, and important developments in FL, GA, and US Virgin Islands.`;

  // Customize title and description for filtered views
  if (category) {
    const categoryName = category.replace(/-/g, ' ');
    title = `${categoryName} Articles | Fischer & Redavid Trial Lawyers`;
    description = `Browse our ${categoryName} articles. Expert insights and legal advice from Fischer & Redavid's experienced trial attorneys.`;
  } else if (year) {
    title = `${year} Legal Articles | Fischer & Redavid Trial Lawyers`;
    description = `Explore our legal articles from ${year}. Stay updated with the latest developments in personal injury law and legal insights.`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/articles${category ? `?category=${category}` : ''}${year ? `?year=${year}` : ''}`,
    },
  };
}

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
