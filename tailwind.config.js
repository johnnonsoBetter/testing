/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
   
    extend: {
      colors: {
        tpblack: '#111111',
        bcolor1: '#202020',
        neutralprimary: '#F2F2F2',
        accentblueweak: '#ADAEF9',
        weakborder: '#323438',
        yellowprimary: '#F2E360',
        neutralsoft: '#969696',
        neutralmedium: '#BFBFBF'
      },
      fontFamily: {
        plus: ['Plus Jakarta Sans', 'sans-serif']
      },
    },
  },
  
  plugins: [require("tailwindcss-animate")],
}
