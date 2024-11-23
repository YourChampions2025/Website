import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/kbhhowb5/**",
      },
    ],
  },

  redirects: async () => {
    return [
      { source: "/blog", destination: "/articles", permanent: true },
      {
        source: "/blog/:slug*",
        destination: "/articles/:slug*",
        permanent: true,
      },
      {
        source: "/terrys-takes/topics",
        destination: "/terrys-takes",
        permanent: true,
      },
      {
        source: "/referral",
        destination: "/for-attorneys",
        permanent: true,
      },
      {
        source: "/podcast",
        destination: "/podcasts",
        permanent: true,
      },
      {
        source: "/site-map",
        destination: "/",
        permanent: true,
      },
      {
        source: "/our-team/jordan-redavid",
        destination: "/about-us/our-attorneys/jordan-redavid-esq-",
        permanent: true,
      },
      {
        source: "/miami-truck-accident-lawyer",
        destination: "/miami/truck-accident-lawyer",
        permanent: true,
      },
      {
        source: "/our-team/jordan-redavid-partner",
        destination: "/about-us/our-attorneys/jordan-redavid-esq-",
        permanent: true,
      },
      {
        source: "/personal-injury",
        destination: "/hollywood-fl",
        permanent: true,
      },
      {
        source: "/reviews",
        destination: "/testimonials",
        permanent: true,
      },
      {
        source: "/our-team",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/jordan-redavid",
        destination: "/about-us/our-attorneys/jordan-redavid-esq-",
        permanent: true,
      },
      {
        source: "/our-team/john-fischer",
        destination: "/about-us/our-attorneys/john-fischer-esq-",
        permanent: true,
      },
      {
        source: "/miami-medical-malpractice-lawyer",
        destination: "/miami/medical-malpractice-lawyer",
        permanent: true,
      },
      {
        source: "/personal-injury/medical-malpractice",
        destination: "/gainesville/medical-malpractice-lawyer",
        permanent: true,
      },
      {
        source: "/miami-motorcycle-accident-lawyer",
        destination: "/miami/motorcycle-accident-lawyer",
        permanent: true,
      },
      {
        source: "/is-wrong-diagnosis-considered-medical-malpractice",
        destination:
          "/blog/2019/january/is-wrong-diagnosis-considered-medical-malpractic",
        permanent: true,
      },
      {
        source: "/about-us/our-attorneys/john-fischer",
        destination: "/about-us/our-attorneys/john-fischer-esq-",
        permanent: true,
      },
      {
        source: "/can-i-sue-my-landlord-for-negligent-security",
        destination:
          "/blog/2018/december/can-i-sue-my-landlord-for-negligent-security-",
        permanent: true,
      },
      {
        source: "/hollywood-personal-injury-lawyer",
        destination: "/hollywood-fl",
        permanent: true,
      },
      {
        source: "/how-much-compensation-is-my-car-accident-worth",
        destination:
          "/blog/2017/july/how-much-compensation-is-my-car-accident-worth-",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
