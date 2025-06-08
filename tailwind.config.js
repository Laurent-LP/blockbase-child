/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.php',
    './**/*.php',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'fond-principal': '#fff8f0',
        'dore-clair':  '#d4af37',
        'dore-fonce': '#b89002',
        'brun-doux' : '#5a4c46',
        'rose-poudre':     '#f6e7eb',
        'taupe':           '#b7a9a0',
        'brun-fonce':      '#5a4c46',
        'cta-dore':        '#d4af37',
        'cta-dore-hover':  '#b8902e',
      },
    },
  },
  plugins: [],
};
