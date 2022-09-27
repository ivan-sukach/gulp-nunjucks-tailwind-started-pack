const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.njk', './src/**/*.js'],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      }
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
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
