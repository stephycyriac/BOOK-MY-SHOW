module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
stehy:{
  50: '#ffe3ec',
  100: '#ffb3c5',
  200: '#fc839f',
  300: '#fa5278',
  400: '#f82453',
  500: '#de0f39',
  600: '#ad082c',
  700: '#7c031f',
  800: '#4c0012',
  900: '#1e0005',
},
},
      },
    },
  
  variants: {
    extend: {},
  },
  plugins: [],
}
