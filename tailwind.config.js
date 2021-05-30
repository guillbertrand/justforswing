module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blackMpc: "#272727", 
        blackJfs: "#202124",
        whiteJfs: '#bdc1c6'
      },
      fontFamily: {
        aleo: ["Aleo", "serif"],
        open: ["Open Sans", "sans-serif"]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
