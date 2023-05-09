/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      center:true,
      padding:"1rem",
      
    },
    screens: {
      xs: "320px",
      // => @media (min-width: 320px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        sans: [
          '"DM Sans"',
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        'sk-purple': {
          'darkest': '#10132D',
          'dark': '#3E3894',
          'DEFAULT': '#0D015A',
          'light': '#716BC7',
          'lighter': '#0F122C',
          'lightest': '#9490D5',
        },
        'sk-orange': '#F89521',
        'sk-blue': '#5498FF',
        'sk-cta': '#122344',
        'sk-dialog': '#253554',
        'sk-sectionbg': '#FEFDFA',
      },
      backgroundImage: {
        'pattern-dark': "url('/src/assets/section-pattern-dark.png')",
        'pattern-light': "url('/src/assets/section-pattern-light.png')",
      },
      screens: {
        xxl: '1410px',
      },
      
    },
    zIndex: {
      '-1': '-1',
     '100': 100,
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
 