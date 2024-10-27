import ContactUs from "@/components/globals/contactUs/contact-us";
import Header from "@/components/globals/header/header";
import HomeAboutUs from "@/components/screens/home/home-about-us/home-about-us";
import HomeBook from "@/components/screens/home/home-book/home-book";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeAboutUs />
      <HomeBook />
      <ContactUs />
    </div>
  );
}
