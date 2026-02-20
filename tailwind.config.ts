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
        wood: {
          50: "#faf6f0",
          100: "#f2e9db",
          200: "#e4d2b5",
          300: "#d4b88d",
          400: "#c49d6a",
          500: "#b8864d",
          600: "#a87242",
          700: "#8b5a38",
          800: "#714934",
          900: "#5c3d2e",
          950: "#311f16",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
