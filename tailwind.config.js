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
        Roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans],
        Lato: ['"Lato"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'searchBackground': '#EFF4F9',
        'homePageButtonBackground': '#355DED',
        'homePageGridBackground': '#D9D9D9',
        'homePageProcessBackground': '#F5F5F5'
      },
      width: {
        '625': '625px',
        '593': '593px',
        '521': '521px',
        '477': '477px',
        '1512': '1512px'
      },
      height: {
        '309': '309px',
        '447': '447px'
      },
      borderRadius: {
        'searchBarRadius': '50px'
      },
      fontSize: {
        '42px': '42px'
      }
    },
  },
  plugins: [],
}