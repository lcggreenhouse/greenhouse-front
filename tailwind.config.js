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
        Lato: ['"Lato"', ...defaultTheme.fontFamily.sans],
        Poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'searchBackground': '#EFF4F9',
        'homePageButtonBackground': '#355DED',
        'homePageGridBackground': '#D9D9D9',
        'homePageProcessBackground': '#F5F5F5',
        'testimonialColor': '#6D91EE',
        'testimonialTextColor': '#22366A',
        'homePageBottomBar': '#3E454F',
        'signUpLeftBarBackground': '#5687E7',
        'formLightColor': '#808080',
        'loginColor': '#2D56EA',
        'formBorderColor': '#D1D1D1',
        'formFieldNameColor': '#2D3748',
        'backColor': '#3573ED',
        'googleButton': '#2D3748'
      },
      width: {
        '625': '625px',
        '593': '593px',
        '521': '521px',
        '477': '477px',
        '1512': '1512px',
        '577': '577px',
        '496': '496px',
        '460': '460px'
      },
      height: {
        '309': '309px',
        '447': '447px',
        '233': '233px',
        '400': '400px'
      },
      borderRadius: {
        'searchBarRadius': '50px',
        'testimonialRadius': '40px'
      },
      fontSize: {
        '42px': '42px'
      }
    },
  },
  plugins: [],
}