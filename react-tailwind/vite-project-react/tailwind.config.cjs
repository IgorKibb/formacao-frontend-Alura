/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend:{ //extensão de cores da configuração padrão
      colors: {
        dark: {
            100: 'rgb(18, 18, 18)',
            200: 'rgb(51, 51, 51)'
        },
        alura: {
            100: '#167BF7',
            200: '#051933'
        }
      }
    }
  },
  plugins: [],
}
