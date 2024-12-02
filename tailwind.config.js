/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     fontFamily:{
      sans:"Lato, sans-serif",
    },
    extend: {
      colors: {
        customDark: '#404968',
        customBlue: "#020D3B",
        customHarsh:"#4A5578",
        customBluee: "#0728B6",
        customNavyBlue:"#04186C",
      },
      
    },
  },
  plugins: [],
}

