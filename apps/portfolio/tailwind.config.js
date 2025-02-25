const { heroui } = require('@heroui/react');
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    '../../node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        'color-input-border': '#B5B5B5',
      },
      fontFamily: {
        'popins': ['Poppins', 'sans-serif'],
      }
      
    },
  },  
  darkMode: 'class',
  plugins: [
    heroui({
      themes: {
        "purple-dark": {
          extend: "dark",
          colors: {
            background: "#fefefe", // --body-gb-color
            foreground: "#0e2431", // --first-color
            primary: {
              50: "#d7d7d7", // --line-color
              100: "#6a59d1", // --second-color
              200: "#614fd0", // --hover-color
              300: "#777", // --third-color
              400: "#614fd0", // --hover-color
              500: "#6a59d1", // --second-color
              600: "#6a59d1", // --second-color
              700: "#0e2431", // --first-color
              800: "#777", // --third-color
              900: "#0e2431", // --first-color
              DEFAULT: "#6a59d1", // --second-color
              foreground: "#fff", // 白色文本
            },                        
            focus: "#614fd0", // --hover-color
            transparent: {
              light: "rgba(0,0,0,0.1)", // --bg-transparent-color
              medium: "rgba(106,89,209,0.1)", // --transparent-color-02
            },
            card: {
              background: "#fff", // --card-bg-color
              modal: "#fff", // --modal-bg-color
            },
            border: {
              default: "#d7d7d7", // --line-color
            },
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        }
      }
    })
  ],
};
