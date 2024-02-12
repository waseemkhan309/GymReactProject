/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        sans:['Inter','sans-serif'],
      },
      darkMode:"class", //for DarkMode
      colors:{
        primary:'#fe9808',
        dark:'#111111'
      },
      container:{
        center:true,
        padding:{
          DEFAULT: "1rem",
          sm: "2rem",
        },
      }
    },
  },
  plugins: [],
}

