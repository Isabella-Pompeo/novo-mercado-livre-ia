/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#F2F2F2', // cinza-claro: Fundo e Elementos de Destaque
        'primary-cta': '#F29F05', // amarelo-âmbar: Botões e Chamadas para Ação
        'secondary-detail': '#F2B705', // amarelo-dourado: Detalhes e Mensagens
        'primary-text': '#384001', // verde-musgo escuro: Cabeçalhos e Textos
        'secondary-complementary': '#6F7302', // verde-musgo claro: Elementos Complementares
      },
    },
  },
  plugins: [],
};

export default config;