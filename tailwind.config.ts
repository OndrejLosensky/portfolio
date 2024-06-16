import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
      colors: {
        'main': "#1a1e23",
        'primary':"#1daf91",
        'primary-hover': "#158c76",
        'primary-active':"#157060",
        'text-dark': "#353c44",
        'text-light': "#f4f6f7",
        'shark': {
          '50': '#f4f6f7',
          '100': '#e2e8eb',
          '200': '#c8d2d9',
          '300': '#a2b2be',
          '400': '#758c9b',
          '500': '#5a7180',
          '600': '#4d5e6d',
          '700': '#434f5b',
          '800': '#3c454e',
          '900': '#353c44',
          '950': '#1a1e23',
        },
        'bermuda': {
          '50': '#f1fcf9',
          '100': '#cff8eb',
          '200': '#9ef1d9',
          '300': '#65e2c2',
          '400': '#36cba9',
          '500': '#1daf91',
          '600': '#158c76',
          '700': '#157060',
          '800': '#155a4e',
          '900': '#164b42',
          '950': '#062d28',
        },
        'malibu': {
          '50': '#f0f9ff',
          '100': '#dff1ff',
          '200': '#b8e5ff',
          '300': '#80d4ff',
          '400': '#33bcfd',
          '500': '#09a3ee',
          '600': '#0082cc',
          '700': '#0067a5',
          '800': '#045888',
          '900': '#0a4970',
          '950': '#062e4b',
        },
      
      
      
      }, 
    },
  },
  darkMode: "class",
  plugins: [
    addVariablesForColors,
    require("tailwindcss-animate"),
  ]

};
export default config;


function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}