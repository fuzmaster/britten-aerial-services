import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0f172a",
        skybrand: "#0284c7",
        greenbrand: "#22c55e",
      },
    },
  },
  plugins: [],
};
export default config;
