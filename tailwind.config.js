module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "blue-dark":"hsl(230, 17%, 14%)",
       "blue-top":"#1f212e", 
       "blue-card":"#252a41",
       "white-top":"#f5f7ff",
       "white-card":"#f0f2fa",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
