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
        "colorContrastLight": "var(--colorContrastLight)"
      },
      fontFamily: {
        "fontMain": ['Inter', 'sans-serif'],
        "fontContrast": ['Monad', 'cursive']
      },
      backgroundImage: {
        'gradient-background': 'var(--backgroundGradient)',
        'gradient-USAFlag': 'var(--backgroundUSAFlag)',
        'gradient-BrazilFlag': 'var(--backgroundBrazilFlag)'
      }
    },
  },
  plugins: [],
}