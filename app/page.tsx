import ContactUs from "@/components/globals/general/contact-us/contact-us";
import WeGetResults from "@/components/globals/general/we-get-results/we-get-results";
import FrequentQuestions from "@/components/screens/home/frequent-questions/frequent-questions";
import HomeAboutUs from "@/components/screens/home/home-about-us/home-about-us";
import HomeBlog from "@/components/screens/home/home-blog/home-blog";
import HomeBook from "@/components/screens/home/home-book/home-book";
import ContentSwitcher from "@/components/screens/home/home-content-switcher/home-content-switcher";
import HomeGraduates from "@/components/screens/home/home-graduates/home-graduates";
import HomeHero from "@/components/screens/home/home-hero/home-hero";
import HomePracticeAreas from "@/components/screens/home/home-practice-areas/home-practice-areas";
import HomeStrategies from "@/components/screens/home/home-strategies/home-strategies";
import HomeTestimonials from "@/components/screens/home/home-testimonials/home-testimonials";
import { getLatestBlogs, getLatestTestimonials } from "@/sanity/lib/api";

export default async function Home() {
  const testimonials = await getLatestTestimonials();
  const blogPosts = await getLatestBlogs();

  return (
    <main>
      <HomeHero />
      <HomeAboutUs />
      <ContentSwitcher />
      <HomeGraduates />
      <WeGetResults />
      <HomeStrategies />
      <HomeTestimonials testimonials={testimonials} />
      <HomePracticeAreas />
      <HomeBook />
      <FrequentQuestions />
      <HomeBlog blogPosts={blogPosts} />
      <ContactUs hasBorderTop />
    </main>
  );
}
