/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        customSerif: ["Sumana", "Georgia", "Times New Roman", "Times", "serif"],
      },
      fontFamily: {
        customSans: [
          "GPC",
          "Arial Narrow",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "Verdana",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
