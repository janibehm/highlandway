/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'secondary-bg': 'var(--secondary-bg-color)',
        'primary': 'var(--primary-color)',
        'primary-hover': 'var(--primary-hover-color)',
        'secondary': 'var(--secondary-color)',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};