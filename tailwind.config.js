/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "colorPrimary": "var(--colorPrimary)",
        "colorSecondary": "var(--colorSecondary)",
        "colorTerciary": "var(--colorTerciary)",
        "colorContrast": "var(--colorContrast)",
        "colorDark": "var(--colorDark)",
        "colorLight": "var(--colorLight)",
        "colorTextPrimary": "var(--colorTextPrimary)",
        "colorTextSecondary": "var(--colorTextSecondary)",
        "colorTextContrast": "var(--colorTextContrast)",
        "colorBackgroundModal": "var(--colorBackgroundModal)",
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