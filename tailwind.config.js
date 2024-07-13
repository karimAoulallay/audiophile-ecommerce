/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayish: {
          100: "var(--color-grayish-100)",
          200: "var(--color-grayish-200)",
          300: "var(--color-grayish-300)",
          400: "var(--color-grayish-400)",
          500: "var(--color-grayish-500)",
          600: "var(--color-grayish-600)",
        },
        "grayish-transparent": "var(--color-grayish-transparent)",
        accent: {
          100: "var(--color-accent-100)",
          200: "var(--color-accent-200)",
        },
        dark: "var(--color-dark)",
        light: "var(--color-light)",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          // sm: "540px",
          // md: "690px",
          // lg: "920px",
          xl: "1100px",
          "2xl": "1250px",
        },
      },
    },
  },
  plugins: [],
};
