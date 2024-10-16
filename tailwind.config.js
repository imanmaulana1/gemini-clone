/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        input: '#f0f3f9',
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in-out',
        loading: 'loading 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        loading: {
          '0%': { backgroundPosition: '-800px 0' },
          '100%': { backgroundPosition: '800px 0' },
        },
      },
    },
  },
  plugins: [],
};
