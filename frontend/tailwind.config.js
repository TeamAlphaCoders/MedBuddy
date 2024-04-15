/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  important: "#root",
  theme: {
    extend: {
      fontFamily: {
        platypi: ["platypi", "sans-serif"],
        PTSeri: ["PT Serif", "serif"],
        roboto: ["Roboto Slab", "serif"],
        lora: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
};
