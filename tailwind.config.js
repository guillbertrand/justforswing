module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blackJfs: "#14205a",
        whiteJfs: '#ffffff',
        yellowJfs: '#ffca3f'
      },
      fontFamily: {
        aleo: ["Medula One", "serif"],
        open: ["Prata", "sans-serif"]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
