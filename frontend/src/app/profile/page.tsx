'use client';

import React from 'react';

const UserProfilePage: React.FC = () => {
  // Em uma aplicação real, você buscaria os dados do perfil do usuário logado
  // e ofereceria opções para editar informações, gerenciar endereços, etc.
  // Por enquanto, exibiremos um placeholder.

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Meu Perfil</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Sidebar de navegação do perfil */}
        <div className="md:col-span-1 bg-gray-100 p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Navegação</h2>
          <ul>
            <li className="mb-2 cursor-pointer hover:text-blue-500">Informações Pessoais</li>
            <li className="mb-2 cursor-pointer hover:text-blue-500">Endereços</li>
            <li className="mb-2 cursor-pointer hover:text-blue-500">Métodos de Pagamento</li>
            <li className="mb-2 cursor-pointer hover:text-blue-500">Histórico de Pedidos</li> {/* Link para a próxima página */}
          </ul>
        </div>
        {/* Conteúdo principal do perfil */}
        <div className="md:col-span-2 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Informações Pessoais</h2>
          <p>Nome: [Nome do Usuário]</p>
          <p>Email: [Email do Usuário]</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
            Editar Perfil
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;