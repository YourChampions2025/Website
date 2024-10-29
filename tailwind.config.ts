import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-instrument-sans)"],
        serif: ["var(--font-instrument-serif)"],
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      sd: "720px",
      md: "900px",
      lg: "1080px",
      xl: "1240px",
      "2xl": "1440px",
    },
  },
  plugins: [],
};
export default config;
