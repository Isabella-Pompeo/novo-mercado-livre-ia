import React from 'react';
// Assuming Image component is available from next/image if needed for charts or placeholders
// import Image from 'next/image'; 

// Placeholder for chart libraries if needed later (e.g., Chart.js, Recharts)
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function SellerDashboard() {
  // Placeholder data for the dashboard
  const salesData = [
    { name: 'Seg', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Ter', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Qua', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Qui', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Sex', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Sáb', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Dom', uv: 3490, pv: 4300, amt: 2100 },
  ];

  const salesSummary = {
    totalSales: 150,
    totalRevenue: "R$ 12.500,00",
    productViews: 5000,
  };

  const recentReviews = [
    { id: 1, productName: "Agente de E-mail Marketing", author: "Ana Silva", rating: 5, comment: "Excelente agente, superou minhas expectativas!" },
    { id: 2, productName: "Agente de CRM", author: "Carlos Pereira", rating: 4, comment: "Bom produto, mas poderia ter mais integrações." },
  ];

  return (
    <div className="min-h-screen flex flex-col p-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Painel do Vendedor</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">Visão geral do seu desempenho</p>
      </header>

      <main className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sales Statistics Card */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Estatísticas de Vendas</h2>
          {/* Placeholder for Chart */}
          <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">
            Gráfico de Vendas (a ser implementado)
            {/* Example Chart (if a library was integrated) */}
            {/* 
            <LineChart width={600} height={250} data={salesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart> 
            */}
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg text-center">
              <p className="text-sm font-medium text-blue-600 dark:text-blue-300 uppercase">Total de Vendas</p>
              <p className="text-3xl font-bold text-blue-700 dark:text-blue-400 mt-1">{salesSummary.totalSales}</p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900 rounded-lg text-center">
              <p className="text-sm font-medium text-green-600 dark:text-green-300 uppercase">Receita Total</p>
              <p className="text-3xl font-bold text-green-700 dark:text-green-400 mt-1">{salesSummary.totalRevenue}</p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900 rounded-lg text-center">
              <p className="text-sm font-medium text-purple-600 dark:text-purple-300 uppercase">Visualizações</p>
              <p className="text-3xl font-bold text-purple-700 dark:text-purple-400 mt-1">{salesSummary.productViews}</p>
            </div>
          </div>
        </div>

        {/* Recent Reviews Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Avaliações Recentes</h2>
          <div className="space-y-4">
            {recentReviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0">
                <p className="font-semibold text-gray-900 dark:text-white mb-1">{review.productName}</p>
                <div className="flex items-center mb-2">
                  <div className="flex items-center text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={`fas fa-star ${i < review.rating ? 'text-yellow-400' : 'text-gray-400'}`}></i>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600 dark:text-gray-400 text-sm">por {review.author}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm italic">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

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