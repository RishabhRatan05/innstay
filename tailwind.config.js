/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        kalar: {
          100: "#EDF1D6",
          200: "#9DC08B",
          300: "#609966",
          400: "#40513B",
          500: "#FFF5E0",
          600: "#8DECB4",
          700: "#41B06E",
          800: "#141E46",
        },
      },
    },
  },
  plugins: [],
}
