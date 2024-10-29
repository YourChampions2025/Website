import type { Metadata } from "next";
import "./globals.css";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Instrument_Serif, Instrument_Sans } from "next/font/google";
import Footer from "@/components/globals/general/footer/footer";
import Header from "@/components/globals/general/header/header";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "Fischer & Redavid Trial Lawyers",
  description: "Fischer & Redavid Trial Lawyers",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${instrumentSerif.variable} antialiased bg-black`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
