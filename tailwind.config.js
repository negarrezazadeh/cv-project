/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        default: '#ffffff',
        gray50: '#f9fafb',
        gray100: '#f3f4f6',
        gray200: '#e5e7eb',
        gray400: '#9ca3af',
        gray600: '#4b5563',
        gray700: '#374151',
        gray900: '#111827',
        'darkgray-d': '#030712',
        darkgray50: '#111827',
        darkgray600: '#d1d5db',
        darkgray900: '#f9fafb',
      },
    },
  },
  plugins: [],
}
