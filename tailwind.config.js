const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  darkMode:'class',
  theme: {
    extend: {},
    fontFamily: {
      'body' : ['Raleway', 'sans-serif'],
    }
  },
  plugins:[
    plugin(function ({addUtilities}){
      addUtilities({
        '.li-style':{
          'margin':'10px',
          'padding':'10px',
          'cursor': 'pointer',
          'transition': 'background-color 0.3s, color 0.3s',
          '&:hover': {
            'color': '#FFA500',
          },
        }
      },['responsive','hover']);
    }),
  ],
}

