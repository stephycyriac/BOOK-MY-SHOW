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
bms:{
  50: '#edf1fc',
  100: '#d3d4e1',
  200: '#b6b8c9',
  300: '#989bb2',
  400: '#7c7f9b',
  500: '#636582',
  600: '#4c4f66',
  700: '#363849',
  800: '#21222e',
  900: '#0a0a16',
},
signin:{
  50: '#ffe4eb',
  100: '#fcb9c5',
  200: '#f48ca0',
  300: '#ed5e7a',
  400: '#e73253',
  500: '#cd183a',
  600: '#a1112d',
  700: '#73091f',
  800: '#470312',
  900: '#1f0004',
}
},

      },
    },
  
  variants: {
    extend: {},
  },
  plugins: [],
}
