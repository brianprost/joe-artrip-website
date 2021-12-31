const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Work Sans'", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "jacpRed": "#e63946",
        "jacpWhite": "#f1faee",
        "jacpBlue": {
          light: "#a8dadc",
          smoke: "#457b9d",
          navy: "#1d3557",
          darkNavy: "#101E33",
        },
      },
      backgroundImage: {
        'hero-pattern': "url('../public/img/video-studio.webp')",
        'vhs-pattern': "url('https://68.media.tumblr.com/595a5fa01fe53ca0e4ca8f37bacc849d/tumblr_nve67mJtue1tanofjo1_500.gif')",
      },
    },
  },
  plugins: [],
};
