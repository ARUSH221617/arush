import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#FF4136", // A bright red for light mode
          dark: "#FF6B6B", // A softer red for dark mode
        },
        background: {
          light: "#F8F9FA", // Light gray for light mode
          dark: "#1A202C", // Dark blue-gray for dark mode
        },
        text: {
          light: "#333333", // Dark gray for light mode
          dark: "#E2E8F0", // Light gray for dark mode
        },
        accent: {
          light: "#38A169", // Green for light mode
          dark: "#68D391", // Lighter green for dark mode
        },
      },
      fontFamily: {
        biggerDisplay: ["BiggerDisplay", "sans-serif"],
        gotham: ["GothamOffice", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
