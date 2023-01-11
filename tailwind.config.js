/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "deep-blue": "#010026",
        red: "#DD4492",
        blue: "#2CBCE9",
        yellow: "#fdcc49",
        grey: "#ededed",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00b5ee 7.21%, #ff45a4 45.05%, #ffba00 78.07%)",
        "gradient-rainbow-blue":
          "linear-gradient(90deg, #24cbff 14.53%, #fc59ff 69.36%, #ffbd0c 107.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush.png')",
      },
    },
    screens: {
      mobile: "480px",
      tablet: "768px",
      desktop: "1060px",
    },
  },
  plugins: [],
};
