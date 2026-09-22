/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        // Display serif — shared DNA across the whole network
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Book One is the steady one. It runs light where its sibling
        // godrepurposesskeletons.com runs dark — gold structure on parchment.
        ink: {
          DEFAULT: '#1c1a17',
          soft: '#3a342c',
          muted: '#6e6459',
        },
        parchment: {
          DEFAULT: '#faf7ef',
          deep: '#f1ead9',
          shade: '#e4d8be',
        },
        brand: {
          red: '#c0282d',        // AA on parchment — carries small text
          'red-deep': '#8f1c20',
          gold: '#c39a3e',       // decorative + display-size only
          'gold-deep': '#8a6a1d', // small gold text on parchment
          'gold-light': '#e0c068', // gold on the dark bands
        },
      },
      maxWidth: { prose: '46rem' },
      boxShadow: {
        photo: '0 18px 40px -20px rgba(28, 26, 23, 0.55)',
        card: '0 12px 30px -18px rgba(28, 26, 23, 0.35)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: { 'fade-up': 'fade-up 0.7s ease-out both' },
    },
  },
  plugins: [],
};
