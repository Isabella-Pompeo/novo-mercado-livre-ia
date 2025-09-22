"use client";

import React from 'react';

import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from 'next/navigation'; // Added for navigation
import { useState } from 'react'; // For accordion states

// Styles are typically applied globally via layout.tsx, but can be imported here if needed for specific page styles.
// import "./globals.css"; 

// Font definitions - assuming these are handled by the root layout.tsx
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Agent Detail Page Component
// The [agentId] in the path indicates a dynamic route parameter.
export default function AgentDetailPage({ params }: { params: { agentId: string } }) {
  const agentId = React.use(params).agentId;
  const router = useRouter(); // Initialize router

  // In a real application, you would fetch agent details based on agentId here.
  // For now, we'll use placeholder data.
  const agentDetails = {
    id: agentId,
    name: `Agente de Automação ${agentId}`,
    description: `Este agente é especializado em automatizar tarefas complexas relacionadas a ${agentId}. Ele integra-se perfeitamente com suas ferramentas existentes para otimizar fluxos de trabalho.`,
    imageUrl: "/placeholder-agent-detail.png", // Placeholder image for agent detail
    price: agentId === "marketing" ? "49.90" : agentId === "vendas" ? "79.90" : "65.00",
    rating: agentId === "marketing" ? "4.8" : agentId === "vendas" ? "4.9" : "4.7",
    category: agentId === "marketing" ? "Marketing" : agentId === "vendas" ? "Vendas" : "E-commerce",
    features: [
      "Integração com APIs populares",
      "Automação de tarefas repetitivas",
      "Relatórios personalizáveis",
      "Suporte técnico dedicado",
    ],
    // Placeholder for more detailed reviews and Q&A data
    reviews: [
      { id: 1, author: "Ana Silva", rating: 5, comment: "Este agente de automação economizou 5 horas do meu dia! A integração com o n8n foi surpreendentemente simples.", date: "2024-01-15" },
      { id: 2, name: "Carlos Pereira", rating: 5, comment: "Encontrei exatamente o que precisava para otimizar meu funil de vendas. Recomendo a todos!", date: "2024-02-20" },
    ],
    qa: [
      { id: 1, question: "Qual a compatibilidade deste agente com o n8n?", answer: "Este agente foi desenvolvido para ser totalmente compatível com as versões mais recentes do n8n, garantindo uma integração fluida." },
      { id: 2, question: "É necessário ter conhecimento em programação para usar este agente?", answer: "Não, este agente foi projetado para ser utilizado por usuários sem conhecimento técnico em programação, focando na facilidade de uso e configuração." },
    ]
  };

  // Accordion states for Q&A
  const [openQAs, setOpenQAs] = useState({});

  const toggleQA = (id) => {
    setOpenQAs(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handlePurchase = () => {
    // Logic for purchasing the agent
    console.log("Purchasing agent:", agentDetails.name);
    // Example: router.push('/checkout');
  };

  return (
    <div className="min-h-screen flex flex-col p-4" suppressHydrationWarning={true}>
      <section className="py-16 px-4 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Agent Image */}
          <div>
            <Image
              src={agentDetails.imageUrl}
              alt={agentDetails.name}
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
              priority // Preload image
            />
          </div>

          {/* Agent Details */}
          <div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {agentDetails.name}
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              {agentDetails.description}
            </p>
            <div className="flex items-center mb-6">
              <div className="flex items-center mr-4">
                <i className="fas fa-star text-yellow-400 text-2xl"></i>
                <span className="ml-2 text-gray-700 dark:text-gray-300 text-xl font-semibold">{agentDetails.rating}</span>
              </div>
              <span className="text-xl font-bold text-blue-600">R$ {agentDetails.price}</span>
            </div>
            <p className="text-lg text-gray-800 dark:text-gray-200 mb-6">
              Categoria: <span className="font-semibold">{agentDetails.category}</span>
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Funcionalidades Principais:</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              {agentDetails.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <div className="mt-10">
              <button
                onClick={handlePurchase}
                className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                Adquirir Agente
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Media Gallery Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto w-full bg-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Galeria de Mídia</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Placeholder for Gallery Images */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700">
            <Image
              src={agentDetails.imageUrl}
              alt={`${agentDetails.name} - Demo 1`}
              width={300}
              height={200}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <p className="text-center text-gray-600 dark:text-gray-400">Demonstração 1</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700">
            <Image
              src="/placeholder-agent-demo2.png" // Another placeholder
              alt={`${agentDetails.name} - Demo 2`}
              width={300}
              height={200}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <p className="text-center text-gray-600 dark:text-gray-400">Demonstração 2</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700">
            <Image
              src="/placeholder-agent-demo3.png" // Another placeholder
              alt={`${agentDetails.name} - Demo 3`}
              width={300}
              height={200}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <p className="text-center text-gray-600 dark:text-gray-400">Demonstração 3</p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Avaliações de Compradores</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 border border-gray-200 dark:border-gray-700">
          {/* Review Summary */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-4xl font-bold text-blue-600">{agentDetails.rating}</p>
              <div className="flex justify-center md:justify-start mt-2">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className={`fas fa-star ${i < Math.floor(parseFloat(agentDetails.rating)) ? 'text-yellow-400' : 'text-gray-400'}`}></i>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Baseado em X avaliações</p>
            </div>
            {/* Add button to write a review if user is logged in */}
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
              Escrever Avaliação
            </button>
          </div>

          {/* Individual Reviews */}
          <div className="space-y-6">
            {/* Example Review 1 */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-xl font-bold text-gray-700 dark:text-gray-200">
                  AS
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900 dark:text-white">Ana Silva</p>
                  <div className="flex items-center text-yellow-400">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star text-gray-400"></i>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">"Este agente de automação economizou 5 horas do meu dia! A integração com o n8n foi surpreendentemente simples."</p>
            </div>
            {/* Example Review 2 */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-xl font-bold text-gray-700 dark:text-gray-200">
                  CP
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900 dark:text-white">Carlos Pereira</p>
                  <div className="flex items-center text-yellow-400">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">"Encontrei exatamente o que precisava para otimizar meu funil de vendas. Recomendo a todos!"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Perguntas Frequentes</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 border border-gray-200 dark:border-gray-700">
          {/* Example Q&A */}
          <div className="mb-6">
            <button
              className="w-full flex justify-between items-center text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 focus:outline-none"
              onClick={() => toggleQA(1)}
            >
              <span>Qual a compatibilidade deste agente com o n8n?</span>
              <span>{openQAs[1] ? '-' : '+'}</span>
            </button>
            {openQAs[1] && (
              <div className="ml-2 mt-2 text-gray-700 dark:text-gray-300">
                Este agente foi desenvolvido para ser totalmente compatível com as versões mais recentes do n8n, garantindo uma integração fluida.
              </div>
            )}
          </div>
          <div className="mb-6">
            <button
              className="w-full flex justify-between items-center text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 focus:outline-none"
              onClick={() => toggleQA(2)}
            >
              <span>É necessário ter conhecimento em programação para usar este agente?</span>
              <span>{openQAs[2] ? '-' : '+'}</span>
            </button>
            {openQAs[2] && (
              <div className="ml-2 mt-2 text-gray-700 dark:text-gray-300">
                Não, este agente foi projetado para ser utilizado por usuários sem conhecimento técnico em programação, focando na facilidade de uso e configuração.
              </div>
            )}
          </div>
          {/* Add more Q&A pairs */}
          <div className="mt-8 text-center">
            <button className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              Fazer uma nova pergunta
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 px-4 text-center">
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