/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['"Inter"', ...defaultTheme.fontFamily.sans],
        Roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'searchBackground': '#EFF4F9',
        'homePageButtonBackground': '#355DED'
      },
      width: {
        '593': '593px'
      },
      borderRadius: {
        'searchBarRadius': '50px'
      }
    },
  },
  plugins: [],
}