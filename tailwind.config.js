/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        "oe-orange": "hsl(36, 73%, 51%)",
        "oe-blue": "hsl(212, 65%, 23%)",
        "oe-blue-10": "hsla(212, 65%, 23%, 0.1)",
      },
    },
  },
  plugins: [],
};
