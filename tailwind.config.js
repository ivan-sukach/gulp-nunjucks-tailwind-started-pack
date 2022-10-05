const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.njk', './src/**/*.js'],
  theme: {
    extend: {

    },

    container: {
      center: true,
      screens: {
        '3xl': '1920px',
      },
      padding: {
        DEFAULT: '2rem',
        sm: '',
      }
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      // Font colors
      dark: '#1D1D1F',
      light: '#F7F7F7',

      // Background colors
      black: '#181818',
      lightest: '#F9F9F9',
      white: '#FFFEFE',

      // Brand colors
      sunset: '#B87829',
      brick: '#B26D5D',
      creme: '#F2EAE2',
    },

    fontFamily: {
      vollkorn: ['vollkorn', 'serif'],
      proxima: ['proxima-nova', 'sans-serif'],
      playfair: ['Playfair Display', 'serif'],
    },

    transitionTimingFunction: {
      'basic-ease': 'cubic-bezier(0.33, 0, 0.13, 1)',
      'secondary-ease': 'cubic-bezier(0.33, 0, 0.67, 1)',
    },

    screens: {
      'xs': '340px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1366px',
      '3xl': '1536px',
      '4xl': '1680px',
      '5xl': '1800px',
    },
  },

  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('optional', '&:optional')
      addVariant('hocus', ['&:hover', '&:focus'])
      addVariant('supports-grid', '@supports (display: grid)')
    }),
    plugin(({ addVariant }) => {
      addVariant('supports-hover', '@media (hover: hover)')
    }),
  ],
}
