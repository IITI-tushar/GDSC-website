import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // General pattern
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Specific folders
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // green: "#00FF00",
        // blue: "#00BFFF",
        // red: "#FF6347",
        // yellow: "#FFFF00",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        moveRocket: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(-10%)" },
        },
      },
      animation: {
        moveRocket: "moveRocket 5s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
