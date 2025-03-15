/** @type {import("prettier").Options} */
const config = {
    semi: false,
    trailingComma: 'all',
    singleQuote: true,
    plugins: ['prettier-plugin-tailwindcss'], // If using Tailwind CSS
    arrowParens: 'avoid',
  };
  
  export default config;