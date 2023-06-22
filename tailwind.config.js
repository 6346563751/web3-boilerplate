/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { background: 'rgba(0,0,0,0)' },
          '100%': { background: 'rgba(0,0,0,0.2)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s',
      }
    },
  },
  plugins: [],
}
