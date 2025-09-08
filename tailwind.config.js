// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        heading: ['Raleway', ...defaultTheme.fontFamily.sans],
        mono: ['Courier New', ...defaultTheme.fontFamily.mono],
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': '#8752FF',
        teal: {
          300: '#4fd1c5',
          400: '#2dd4bf',
          500: '#14b8a6',
        },
        yellow: {
          400: '#facc15',
        },
        gray: {
          800: '#1f2937',
          900: '#111827',
        },
        'purple-dark': '#5a2e91',
        'teal-dark': '#1d8f8e',
        'indigo-500': '#3f51b5',
        'green-500': '#4caf50',
        'highlight-green': '#22c55e',
        'highlight-blue': '#38bdf8',
        'highlight-lightblue': '#60a5fa',
        'gradient-yellow': '#facc15',
        'gradient-pink': '#f472b6',
        'gradient-purple': '#d946ef',
        'gradient-indigo': '#8b5cf6',
        'vm-green-start': '#a8e063',
        'vm-green-mid': '#56ab2f',
        'vm-blue-mid': '#2b8aab',
        'vm-purple-end': '#6a11cb',
        'accent-blue': '#2979ff',
        'dark-blue': '#0b2454',
        'service-primary': '#0c4a6e',
        'service-secondary': '#0284c7',
        'service-dark': '#1e293b',
        'service-light': '#f1f5f9',
      },
      boxShadow: {
        glow: "0px 0px 95.27px 0px #F2F2F280 inset",
        outline: "0px 0px 0px 4.33px #999999 inset",
        topInset: "-8.66px -8.66px 4.33px -8.66px #B3B3B3 inset",
        bottomInset: "8.66px 8.66px 4.33px -8.66px #B3B3B3 inset",
        softInset: "12.99px 12.99px 2.17px -15.16px #FFFFFF80 inset",
      },
      backgroundImage: {
        'radial-gradient-card': 'radial-gradient(circle at center, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0) 70%)',
        'linear-gradient-purple-blue': 'linear-gradient(to right, #8B5CF6, #3B82F6)',
      },
      backdropFilter: {
        'none': 'none',
        'blur-lg': 'blur(10px)', // Custom blur value for glassmorphism
      },
      maxWidth: {
        'custom': '90rem',
        '8xl': '120rem',
        '4xl': '47rem',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/forms'),
  ],
};
