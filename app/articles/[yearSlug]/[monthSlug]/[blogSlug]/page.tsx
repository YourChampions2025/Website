import DynamicDataPrevBackNextButtons from "@/components/globals/general/dynamic-data-prev-back-next-buttons/dynamic-data-prev-back-next-buttons";
import LearnMoreSection from "@/components/globals/general/learn-more-section/learn-more-section";
import PageGridLayout from "@/components/globals/layout/page-grid-layout/page-grid-layout";
import BlogSlugHero from "@/components/screens/blog/[slug]/blog-slug-hero/blog-slug-hero";
import MainContentBlogSlug from "@/components/screens/blog/[slug]/main-content-blog-slug/main-content-blog-slug";
import SideContentBlogSlug from "@/components/screens/blog/[slug]/side-content-blog-slug/side-content-blog-slug";
import { getArticleBySlug } from "@/sanity/lib/api";
import { BlogProps } from "@/types/types";
import { BlogSEOItem } from "@/types/seo";
import { Metadata } from "next";
import { BASE_URL } from "@/utils/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    blogSlug: string;
    monthSlug: string;
    yearSlug: string;
  }>;
}): Promise<Metadata> {
  try {
    const resolvedParams = await params;
    const { blog }: { blog: BlogProps } = await getArticleBySlug(resolvedParams.blogSlug);

    const date = new Date(blog.date);
    const year = date.getFullYear().toString();
    const monthNames = ['january', 'february', 'march', 'april', 'may', 'june', 
      'july', 'august', 'september', 'october', 'november', 'december'];
    const month = monthNames[date.getMonth()];

    return {
      title: `${blog.title} | Fischer Redavid PLLC`,
      description: blog.description,
      alternates: {
        canonical: `${BASE_URL}/articles/${year}/${month}/${blog.slug}`,
      },
    };
  } catch (error) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist",
    };
  }
}

export default async function BlogSlugPage({
  params,
}: {
  params: Promise<{
    blogSlug: string;
    monthSlug: string;
    yearSlug: string;
  }>;
}) {
  const { blogSlug } = await params;

  const { blog }: { blog: BlogProps } = await getArticleBySlug(blogSlug);

  return (
    <main>
      <BlogSlugHero imageUrl={blog?.imageUrl} />
      <PageGridLayout
        mainContent={
          <MainContentBlogSlug
            author={blog.author}
            date={blog.date}
            title={blog.title}
            content={blog.content}
            categories={blog.categories}
            type="blog"
          />
        }
        sideContent={<SideContentBlogSlug />}
      />
      <DynamicDataPrevBackNextButtons prev={blog?.prev} next={blog?.next} />
      <LearnMoreSection />
    </main>
  );
}
