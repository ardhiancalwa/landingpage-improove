/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('assets/backgrounds/hero_work.png')",
        'footer-texture': "url('assets/backgrounds/pattern1.png')",
      }
    },
    colors: {
      'primaryColor' : '#1C4EFF',
      'secondaryColor' : '#FEBB0E',
      transparent: 'transparent',
      'whiteColor' : '#FFFFFF',
      'blackColor' : '#2B2020',
      'greyColor' : '#757575',
    },
    fontFamily: {
      'jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
      'space-grotesk':['"Space Grotesk"', 'sans-serif'],
      gilroy: ['Gilroy', 'sans-serif'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
