module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class' ,// or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Poppins', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
