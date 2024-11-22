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
    ];
  },
};

export default nextConfig;
