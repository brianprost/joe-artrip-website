const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Work Sans'", ...defaultTheme.fontFamily.sans],
        vhs: ["'Press Start 2P'", ...defaultTheme.fontFamily.mono],
        lexend: ["'Lexend'", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        "jacpRed": "#e63946",
        "jacpWhite": "#f1faee",
        "jacpBlue": {
          light: "#a8dadc",
          smoke: "#457b9d",
          navy: "#1d3557",
          darkNavy: "#101E33",
          joeChoice: "#7aaede",
        },
      },
      backgroundImage: {
        'hero-pattern': "url('../public/img/video-studio.webp')",
        // 'vhs-pattern': "url('https://68.media.tumblr.com/595a5fa01fe53ca0e4ca8f37bacc849d/tumblr_nve67mJtue1tanofjo1_500.gif')",
        'vhs-pattern-1': "url('../public/img/vhs-static-1.webp')",
        'vhs-pattern-2': "url('../public/img/vhs-static-2.webp')",
        'vhs-pattern-3': "url('../public/img/vhs-static-3.webp')",
        'vhs-pattern-4': "url('../public/img/vhs-static-4.webp')",
        'vhs-pattern-animated': "url('../public/img/animated-vhs-pattern.webp')",
      },
    },
  },
  plugins: [],
};
