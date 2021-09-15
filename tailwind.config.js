module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class' ,// or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#2E2F2F',
        'secondary': '#FEFEFD',
      },
      textColor: {
        'primary': '#2E2F2F',
        'secondary': '#FEFEFD',
      },
      fontFamily: {
        'primary': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '10xl': '9rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
