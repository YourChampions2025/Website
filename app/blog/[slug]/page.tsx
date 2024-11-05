import LearnMoreSection from "@/components/globals/general/learn-more-section/learn-more-section";
import PageGridLayout from "@/components/globals/layout/page-grid-layout/page-grid-layout";
import BlogPrevBackNextButtons from "@/components/screens/blog/[slug]/blog-prev-back-next-buttons/blog-prev-back-next-buttons";
import BlogSlugHero from "@/components/screens/blog/[slug]/blog-slug-hero/blog-slug-hero";
import MainContentBlogSlug from "@/components/screens/blog/[slug]/main-content-blog-slug/main-content-blog-slug";
import SideContentBlogSlug from "@/components/screens/blog/[slug]/side-content-blog-slug/side-content-blog-slug";

export default function BlogSlugPage() {
  return (
    <main>
      <BlogSlugHero />
      <PageGridLayout
        mainContent={<MainContentBlogSlug />}
        sideContent={<SideContentBlogSlug />}
      />
      <BlogPrevBackNextButtons />
      <LearnMoreSection />
    </main>
  );
}
