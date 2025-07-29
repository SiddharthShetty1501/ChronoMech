/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brass: {
          50: '#fefce8',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#f59e0b',
          500: '#d97706',
          600: '#b45309',
          700: '#92400e',
          800: '#78350f',
          900: '#451a03',
        },
        copper: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#cd7c2f',
          500: '#b45309',
          600: '#92400e',
          700: '#78350f',
          800: '#451a03',
          900: '#1c0a00',
        },
        steam: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'mono': ['Courier New', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'steam': 'steam 4s ease-in-out infinite',
        'gear-rotate': 'gear-rotate 8s linear infinite',
      },
      keyframes: {
        steam: {
          '0%, 100%': { opacity: 0.3, transform: 'translateY(0px)' },
          '50%': { opacity: 0.8, transform: 'translateY(-10px)' },
        },
        'gear-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
};