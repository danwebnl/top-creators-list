/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#415A77",
        background: "#E0E1DD",
        list: "#778DA9",
      },
    },
  },
  plugins: [],
};
