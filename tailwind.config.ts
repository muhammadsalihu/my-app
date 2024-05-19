import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#0A2540',
        'accent-orange': '#FF6F00',
        'light-gray': '#F5F5F5',
      },
    },
  },
  plugins: [],
};
export default config;
