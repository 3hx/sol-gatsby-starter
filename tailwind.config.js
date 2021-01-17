module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto",
        inter: "Inter",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
