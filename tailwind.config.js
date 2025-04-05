
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      dropShadow: {
        glow: "0 0 10px #00f2ff",
      },
    },
  },
  plugins: [],
};
