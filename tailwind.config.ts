import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],

  theme: {
    // container: { center: true, padding: "0 7.5rem" },
    extend: {
      colors: {
        // Branding
        primary: "#FFB6C1", // pink
        secondary: "#000", // black

        // Shadow and shades
        "primary-light": "#FFE5EC", // pink light
        grey: "#9CA3AF", // gray

        // Text styling
        "primary-text": "#FFB6C1", // pink
        "secondary-text": "#FFFFFF", //white

        // Background
        "primary-bg": "#E8E8E8",
        "secondary-bg": "#fff", // white
        // 'dark-bg': "", //
      },
      fontFamily: {
        primary: ['"Gudea"', "sans-serif"],
        secondary: ["Old Standard TT", "serif"],
      },

      // boxShadow
      dropShadow: {
        black: ["0px 4px 4px rgba(0,0,0,25%)", "0px 1px 1px rgba(0,0,0,6%) "],
        pink: [
          "1px 1px 2px rgba(255,182,193,10%)",
          "1px 1px 1px rgba(255,182,193,6%) ",
        ],
        white: [
          "1px 1px 2px rgba(242,242,242,10%)",
          "1px 1px 1px rgba(242,242,242,6%) ",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
