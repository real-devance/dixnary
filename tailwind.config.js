/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors:{
        "primary-color" : "#f97316",
        "accent-color" : "#FED7AA",

      },
      fontFamily:{
        "inter": ["Inter", "sans-serif"],
        "inconsolata" : ["Inconsolata", "monospace"],
        "lora": ["Lora", "serif"]
      },

    
    },

    
  },
  plugins: [],
}

