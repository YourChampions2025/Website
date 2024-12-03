import ContactUs from '@/components/globals/general/contact-us/contact-us';
import WeGetResults from '@/components/globals/general/we-get-results/we-get-results';
import FrequentQuestions from '@/components/screens/home/frequent-questions/frequent-questions';
import HomeAboutUs from '@/components/screens/home/home-about-us/home-about-us';
import HomeBlog from '@/components/screens/home/home-blog/home-blog';
import HomeBook from '@/components/screens/home/home-book/home-book';
import ContentSwitcher from '@/components/screens/home/home-content-switcher/home-content-switcher';
import HomeGraduates from '@/components/screens/home/home-graduates/home-graduates';
import HomeHero from '@/components/screens/home/home-hero/home-hero';
import HomePracticeAreas from '@/components/screens/home/home-practice-areas/home-practice-areas';
import HomeStrategies from '@/components/screens/home/home-strategies/home-strategies';
import HomeTestimonials from '@/components/screens/home/home-testimonials/home-testimonials';
import {
  getBiggestResults,
  getLatestBlogs,
  getLatestTestimonials,
} from '@/sanity/lib/api';
import { Metadata } from 'next';
import { BASE_URL } from '@/utils/constants';

export const metadata: Metadata = {
  title: 'Fischer Redavid Trial Lawyers | FL, GA, US Virgin Islands',
  description:
    'Award-winning personal injury law firm serving Florida, Georgia, and the US Virgin Islands. Our experienced trial lawyers fight aggressively for maximum compensation.',
  alternates: {
    canonical: BASE_URL,
  },
};

export default async function Home() {
  const testimonials = await getLatestTestimonials();
  const blogPosts = await getLatestBlogs();
  const biggestResults = await getBiggestResults();

  return (
    <main>
      <HomeHero />
      <HomeAboutUs />
      <ContentSwitcher />
      <HomeGraduates />
      <WeGetResults results={biggestResults} />
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
