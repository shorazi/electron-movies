const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/renderer/index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      md: '1024px',
      lg: '1280px'
    }
  },
  darkMode: 'class',
  plugins: [
    nextui({
      prefix: 'nextui', // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: 'light', // default theme from the themes object
      defaultExtendTheme: 'light', // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          colors: {
            primary: '#f9f9f9',
            secondary: '#f9f9f9a2',
            accent: '#F8B319',
            success: '#F8B319',
            background: '#2b2b2b',
            // background2: '#21242D',
            background2: '#16181E'
          }
          // colors: {
          //   primary: '#E2F1E7',
          //   secondary: '#387478',
          //   accent: '#243642',
          //   success: '#243642',
          //   background: '#629584',
          //   background2: '#243642'
          // }
        },
        dark: {
          colors: {}
        }
      }
    })
  ]
}
