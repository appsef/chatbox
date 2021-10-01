module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'lexend': ['"Lexend"', 'sans-serif'],
   },
    extend: {
      colors: {
        'weta': '#34495E',
      },
      textColor: {
        'primary': '#34495E',
        'secondary': '#2C3E50',
        'danger': '#e3342f',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
