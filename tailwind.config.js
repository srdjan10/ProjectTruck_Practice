/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        monte: ["monte", "sans"],
        monteI: ['monteItalic, "sans"'],
      },
      colors: {
        tahiti: "#006480f5",
      },
    },
  },
  plugins: [],
};
