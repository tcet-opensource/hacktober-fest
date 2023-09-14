/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        sponserShadow:
          "0px 1px 2px 0px rgba(158, 165, 255, 0.7) inset, 0px -1px 2px 0px #454dc2 inset;",
      },
      fontFamily: {
        spline: ["Spline Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
