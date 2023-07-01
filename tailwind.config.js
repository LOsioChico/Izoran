/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darkLight: '#2a2c31',
        dark: '#202125',
      },
    },
  },
  plugins: [],
}
