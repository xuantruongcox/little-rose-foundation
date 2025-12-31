import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
        light: "var(--color-light)",
        dark: "var(--color-dark)",

        lrf: {
          green: "var(--color-lrf-green)",
          red: "var(--color-lrf-red)",
          aiBubble: "var(--color-gray-100)",
          userBubble: "var(--color-green-50)"
        }
      },
      fontFamily: {
        gotham: ["var(--font-gotham)", "sans-serif"],
      },

      borderRadius: {
        btn: "var(--radius-btn)",
        card: "var(--radius-card)",
      }, keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      }, animation: {
        "fade-in-up": "fade-in-up 0.3s ease-out forwards",
        "slide-in-right": "slide-in-right 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;