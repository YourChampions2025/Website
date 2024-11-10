import LearnMoreSection from "@/components/globals/general/learn-more-section/learn-more-section";
import PageGridLayout from "@/components/globals/layout/page-grid-layout/page-grid-layout";
import BlogPrevBackNextButtons from "@/components/screens/blog/[slug]/blog-prev-back-next-buttons/blog-prev-back-next-buttons";
import BlogSlugHero from "@/components/screens/blog/[slug]/blog-slug-hero/blog-slug-hero";
import MainContentBlogSlug from "@/components/screens/blog/[slug]/main-content-blog-slug/main-content-blog-slug";
import SideContentBlogSlug from "@/components/screens/blog/[slug]/side-content-blog-slug/side-content-blog-slug";
import { getArticleBySlug } from "@/sanity/lib/api";
import { BlogProps } from "@/types/types";

export default async function BlogSlugPage({
  params,
}: {
  params: Promise<{
    blogSlug: string;
    monthSlug: string;
    yearSlug: string;
  }>;
}) {
  const { blogSlug, monthSlug, yearSlug } = await params;

  const { blog }: { blog: BlogProps } = await getArticleBySlug(blogSlug);

  return (
    <main>
      <BlogSlugHero imageUrl={blog?.imageUrl} />
      <PageGridLayout
        mainContent={<MainContentBlogSlug blog={blog} />}
        sideContent={<SideContentBlogSlug />}
      />
      <BlogPrevBackNextButtons prev={blog?.prev} next={blog?.next} />
      <LearnMoreSection />
    </main>
  );
}
