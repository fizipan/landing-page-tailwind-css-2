module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        atas: "999",
      },
      width: {
        "text-landing": "35%",
        "img-landing": "50%",
      },
      textColor: {
        primary: "#000000",
        secondary: "#7D7987",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
