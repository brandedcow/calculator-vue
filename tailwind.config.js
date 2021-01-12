module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "hscreen/2": '50vh'
      },
      colors :{
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        'primary-text': 'var(--color-text-primary)',
        'secondary-text': 'var(--color-text-secondary)',
        'primary-button': 'var(--color-button-primary)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
