/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "colorPrimary": "var(--colorPrimary)"
      },
      fontFamily: {
        "fontMain": ['Inter', 'sans-serif'],
        "fontContrast": ['Nordic', 'cursive']
      },
      backgroundImage: {
        'gradient-background': 'var(--backgroundGradient)'
      }
    },
  },
  plugins: [],
}