'use client';

import React from 'react';

interface ProductDetailPageProps {
  params: {
    productId: string;
  };
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ params }) => {
  const { productId } = params;

  // Em uma aplicação real, você buscaria os detalhes do produto usando productId
  // Por enquanto, exibiremos um placeholder

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Detalhes do Produto</h1>
      <p>ID do Produto: {productId}</p>
      {/* Placeholder para imagem do produto, nome, descrição, preço, botão adicionar ao carrinho */}
      <div className="mt-4">
        <p>Nome do Produto: [Nome do Produto]</p>
        <p>Descrição: [Descrição detalhada do produto]</p>
        <p className="text-xl font-semibold">[Preço]</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;