
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/App.tsx",
    "./src/components/Editorial.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        'dm-sans': ['DM Sans', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
      dropShadow: {
        glow: "0 0 10px #00f2ff",
      },
    },
  },
  plugins: [],
};
