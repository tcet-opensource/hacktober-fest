/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-explore': 'linear-gradient(108deg, #161136 5.21%, #0e0b23 98.76%)',
      },
      fontFamily: {
        spline: ["Spline Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
