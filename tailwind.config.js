/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        darkGray: '#030712',
        darkGray50: '#111827',
        darkGray100: '#1f2937',
        darkGray200: '#374151',
        darkGray300: '#4b5563',
        darkGray400: '#6b7280',
        darkGray500: '#9ca3af',
        darkGray600: '#d1d5db',
        darkGray700: '#e5e7eb',
        darkGray800: '#f3f4f6',
        darkGray900: '#f9fafb',
      },
    },
  },
  plugins: [],
}
