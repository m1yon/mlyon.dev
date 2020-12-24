const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './pages/*.tsx',
    './pages/**/*.tsx',
    './components/*.tsx',
    './components/**/*.tsx',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      gray: colors.gray,
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '6rem',
        lg: '8rem',
        xl: '10rem',
        '2xl': '14rem',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
