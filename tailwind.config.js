module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "hscreen/2": '50vh'
      },
      height: {
        "full+1.5rem": 'calc(100% + 1.5rem)'
      },
      colors :{
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        'primary-text': 'var(--color-text-primary)',
        'secondary-text': 'var(--color-text-secondary)',
        'primary-button': 'var(--color-button-primary)'
      },
      transitionProperty: {
        'fontSize': 'font-size'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
