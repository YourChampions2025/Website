import ContactUs from "@/components/globals/contactUs/contact-us";
import Header from "@/components/globals/header/header";
import FrequentQuestions from "@/components/screens/home/FAQ/frequent-questions";
import HomeAboutUs from "@/components/screens/home/home-about-us/home-about-us";
import HomeBook from "@/components/screens/home/home-book/home-book";
import ContentSwitcher from "@/components/screens/home/home-content-switcher/home-content-switcher";

export default function Home() {
  return (
    <div>
      <Header />

      <HomeAboutUs />
      <ContentSwitcher />
      <HomeBook />
      <FrequentQuestions />
      <ContactUs />
    </div>
  );
}
