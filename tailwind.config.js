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
    },
  },
  plugins: [],
};
