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
       "blue-facebook":"hsl(208, 92%, 53%)",
       "blue-twitter":"hsl(203, 89%, 53%)",
       "instagram-start":"hsl(37, 97%, 70%)",
       "instagram-stop":"hsl(329, 70%, 58%)",
       "red-youtube":"hsl(348, 97%, 39%)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
