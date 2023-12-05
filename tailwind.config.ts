import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./icons-tsx/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        nemt: {
          primary: "#2D6CDF",

          secondary: "#070D18",

          accent: "#E4ECFB",

          neutral: "#ffffff",

          "base-100": "#ffffFF",

          info: "#f3f4fd",

          success: "#16a34a",

          warning: "#ffffff",

          error: "#E6264E",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
export default config;
