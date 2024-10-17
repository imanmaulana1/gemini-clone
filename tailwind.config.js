/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        input: '#f0f3f9',
        darkmode: '#131314',
        'darkmode-secondary': '#1e1f20',
        'darkmode-tertiary': '#1a1a1c',
        'darkmode-hover': '#2a2a2a'
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in-out',
        loading: 'loading 2s linear infinite',
        spin: 'spin 1s linear infinite',
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
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
    },
  },
  plugins: [],
};
