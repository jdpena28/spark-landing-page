module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class' ,// or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#2E2F2F',
        'secondary': '#FEFEFD',
        'background': '#1B1B1B',
        'background2': '#252525',
      },
      textColor: {
        'primary': '#2E2F2F',
        'secondary': '#FEFEFD',
      },
      fontFamily: {
        'primary': ['Raleway', 'sans-serif'],
      },
      fontSize: {
        '10xl': '9rem'
      },
      borderWidth: {
        '1':'1px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
