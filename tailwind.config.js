/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spline: ["Spline Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
