import { Metadata } from 'next';
import './globals.css';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Instrument_Serif, Instrument_Sans } from 'next/font/google';
import Footer from '@/components/globals/general/footer/footer';
import Header from '@/components/globals/general/header/header';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
});
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-instrument-serif',
});

import { Tracking } from '@/components/Analytics/Analytics';

export const metadata: Metadata = {
  title: 'Personal Injury Law Firm | Fischer Redavid PLLC ',
  description:
    'Fischer Redavid PLLC is a renowned personal injury law firm, offering a client-first approach & serving clients throughout Florida, Georgia & the U.S. Virgin Islands. Call now!',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta
          name='google-site-verification'
          content='6K5fxOYXteM4dWjtp4tJmDaC9gGp-blu4uXyp9T4c80'
        />
      </head>
      <body
        className={`${instrumentSans.variable} ${instrumentSerif.variable} antialiased bg-black`}
      >
        <Header />
        {children}
        <Footer />

        <Tracking.GA4 GA4_ID={process.env.NEXT_PUBLIC_GA4_ID} />
        <Tracking.Meta META_PIXEL_ID={process.env.NEXT_PUBLIC_META_PIXEL_ID} />
        <Tracking.CallRail
          CALL_RAIL_SRC={process.env.NEXT_PUBLIC_CALL_RAIL_SRC}
        />
        <Tracking.ReCaptcha_V3 />
        <Tracking.VercelInsights />
        <Tracking.VercelAnalytics />
      </body>
    </html>
  );
}
