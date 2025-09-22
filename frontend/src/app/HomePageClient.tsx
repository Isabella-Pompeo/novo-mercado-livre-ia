"use client";

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// Main component
export default function HomePageClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter(); // Initialize router

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Navigate to the search results page with the query
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Hero Section */}
      <section className="text-center py-16 px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Automatize seu trabalho com agentes de automação baseados em n8n
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
          Simplifique tarefas repetitivas e integre seus sistemas, sem precisar de conhecimento técnico.
        </p>

        {/* Campo de Busca */}
        <form onSubmit={handleSearch} className="relative w-full max-w-lg mx-auto mb-8">
          <input
            type="text"
            placeholder="O que você precisa automatizar hoje? Ex: Marketing, Vendas, E-commerce..."
            className="w-full px-6 py-4 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Buscar
          </button>
        </form>

        {/* CTA */}
        <a
          href="/agents" // Link para a página de todos os agentes
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg"
        >
          Ver todos os agentes
        </a>
      </section>

      {/* Seção de Categorias */}
      <section className="py-16 px-4 max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Explore por Categoria
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Exemplo de Card de Categoria */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center border border-gray-200 dark:border-gray-700">
            <div className="text-4xl mb-4 text-blue-600">
              {/* Ícone de Marketing */}
              <i className="fas fa-bullhorn"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Marketing</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Automações para campanhas, e-mails e redes sociais.</p>
            <a href="/agents/marketing" className="mt-4 inline-block text-blue-600 hover:underline">Ver Agentes →</a>
          </div>
          {/* Repetir para outras categorias */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center border border-gray-200 dark:border-gray-700">
            <div className="text-4xl mb-4 text-blue-600">
              {/* Ícone de Vendas */}
              <i className="fas fa-chart-line"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Vendas</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Otimize seu funil de vendas e CRM.</p>
            <a href="/agents/vendas" className="mt-4 inline-block text-blue-600 hover:underline">Ver Agentes →</a>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center border border-gray-200 dark:border-gray-700">
            <div className="text-4xl mb-4 text-blue-600">
              {/* Ícone de E-commerce */}
              <i className="fas fa-shopping-cart"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">E-commerce</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Integrações para sua loja virtual.</p>
            <a href="/agents/ecommerce" className="mt-4 inline-block text-blue-600 hover:underline">Ver Agentes →</a>
          </div>
        </div>
      </section>

      {/* Seção de Produtos em Destaque */}
      <section className="py-16 px-4 max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Produtos em Alta
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Exemplo de Card de Produto */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
            <Image
              src="/placeholder-product.png" // Substituir por imagens reais
              alt="Agente de Automação"
              width={300}
              height={200}
              className="rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Agente de Automação de E-mail Marketing</h3>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold text-blue-600">R$ 49,90</span>
              <div className="flex items-center">
                <i className="fas fa-star text-yellow-400"></i>
                <span className="ml-1 text-gray-700 dark:text-gray-300">4.8</span>
              </div>
            </div>
            <a
              href="/agents/marketing" // Link para a página de detalhes do produto
              className="block w-full text-center bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Ver Detalhes
            </a>
          </div>
          {/* Repetir para outros produtos */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
            <Image
              src="/placeholder-product.png" // Substituir por imagens reais
              alt="Agente de Automação"
              width={300}
              height={200}
              className="rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Agente de Integração de CRM</h3>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold text-blue-600">R$ 79,90</span>
              <div className="flex items-center">
                <i className="fas fa-star text-yellow-400"></i>
                <span className="ml-1 text-gray-700 dark:text-gray-300">4.9</span>
              </div>
            </div>
            <a
              href="/agents/vendas" // Link para a página de detalhes do produto
              className="block w-full text-center bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Ver Detalhes
            </a>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
            <Image
              src="/placeholder-product.png" // Substituir por imagens reais
              alt="Agente de Automação"
              width={300}
              height={200}
              className="rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Agente de Análise de Dados</h3>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold text-blue-600">R$ 65,00</span>
              <div className="flex items-center">
                <i className="fas fa-star text-yellow-400"></i>
                <span className="ml-1 text-gray-700 dark:text-gray-300">4.7</span>
              </div>
            </div>
            <a
              href="/agents/ecommerce" // Link para a página de detalhes do produto
              className="block w-full text-center bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Ver Detalhes
            </a>
          </div>
        </div>
      </section>

      {/* Seção de Confiança e Depoimentos */}
      <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900 w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            O que nossos clientes dizem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Exemplo de Depoimento */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                "Este agente de automação economizou 5 horas do meu dia! A integração com o n8n foi surpreendentemente simples."
              </p>
              <div className="flex items-center">
                <div className="ml-4">
                  <p className="font-semibold text-gray-900 dark:text-white">Ana Silva</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Gerente de Marketing</p>
                </div>
              </div>
            </div>
            {/* Exemplo de Depoimento 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                "Encontrei exatamente o que precisava para otimizar meu funil de vendas. Recomendo a todos!"
              </p>
              <div className="flex items-center">
                <div className="ml-4">
                  <p className="font-semibold text-gray-900 dark:text-white">Carlos Pereira</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Consultor de Vendas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Selos de Confiança */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Nossa Plataforma é Segura</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full dark:bg-blue-900 dark:text-blue-300">
                <i className="fas fa-shield-alt mr-2"></i> Pagamento Seguro
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 text-sm font-medium rounded-full dark:bg-green-900 dark:text-green-300">
                <i className="fas fa-check-circle mr-2"></i> Vendedores Verificados
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full dark:bg-yellow-900 dark:text-yellow-300">
                <i className="fas fa-headset mr-2"></i> Suporte Rápido
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 px-4 text-center w-full">
        <div className="max-w-4xl mx-auto">
          <p>&copy; 2025 Agentes de Automação IA. Todos os direitos reservados.</p>
          <div className="mt-4 space-x-4">
            <a href="/about" className="hover:underline">Sobre Nós</a>
            <a href="/contact" className="hover:underline">Contato</a>
            <a href="/privacy" className="hover:underline">Política de Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}