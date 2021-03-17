import React from 'react';
import TopBar from '../../design-components/TopBar';
import Footer from '../../design-components/Footer';
import Card from '../../design-components/Card';
import Cerva from '../../assets/images/Cerva.png';

const produtos = [
  {
    id: 1,
    produto: 'Skol Lata 250ml',
    preco: '2.20',
    imagem: Cerva,
  },
  {
    id: 2,
    produto: 'Skol Lata 350ml',
    preco: '2.20',
    imagem: Cerva,
  },
  {
    id: 2,
    produto: 'Skol Lata 550ml',
    preco: '2.20',
    imagem: Cerva,
  },
];

function Products() {
  return (
    <div>
      <TopBar title="TryBeer" />
      { produtos.map((produto) => (
        <Card produto={ produto } key={ produto.id } />
      ))}
      <Footer total="102,40" />
    </div>
  );
}

export default Products;
