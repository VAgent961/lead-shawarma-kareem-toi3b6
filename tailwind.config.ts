import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
  "primary": "#E11D48",
  "secondary": "#F59E0B",
  "accent": "#F59E0B",
  "background": "#FAFAFA",
  "surface": "#FFFFFF",
  "ink": "#171717",
  "muted": "#737373",
  "dark": "#0A0A0A"
},
      fontFamily: {
  "heading": [
    "Montserrat",
    "sans-serif"
  ],
  "body": [
    "Inter",
    "sans-serif"
  ]
},
      fontSize: {},
      spacing: {},
      borderRadius: {},
      boxShadow: {
  "card": "0 4px 12px rgba(0,0,0,0.06)",
  "elevated": "0 10px 30px rgba(0,0,0,0.12)"
},
    },
  },
  plugins: [],
};

export default config;
