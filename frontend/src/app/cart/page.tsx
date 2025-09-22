'use client';

import React from 'react';

const ShoppingCartPage: React.FC = () => {
  // Em uma aplicação real, você buscaria os itens do carrinho do usuário
  // Por enquanto, exibiremos um placeholder

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Carrinho de Compras</h1>
      {/* Placeholder para lista de itens do carrinho */}
      <div className="mt-4">
        <p>Seu carrinho está vazio.</p>
        {/* Exemplo de item no carrinho (em uma aplicação real, seria dinâmico) */}
        {/*
        <div className="flex items-center justify-between border-b py-2">
          <div>
            <p>Nome do Produto</p>
            <p className="text-sm text-gray-600">Quantidade: 1</p>
          </div>
          <p>$XX.XX</p>
        </div>
        */}
      </div>
      <div className="mt-6 text-right">
        <p className="text-xl font-semibold">Total: $XX.XX</p>
        <button className="bg-green-500 text-white px-6 py-3 rounded mt-2">
          Finalizar Compra
        </button>
      </div>
    </div>
  );
};

export default ShoppingCartPage;