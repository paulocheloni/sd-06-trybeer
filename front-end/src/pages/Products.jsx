import React from 'react';
import MenuTop from '../components/MenuTop';
import Cards from '../components/Cards';
export default function Products() {
  return (
    <div>
      <MenuTop title="TryBeer" />
      <Cards />
      <button data-testid="checkout-bottom-btn">Ver Carrinho</button>
      <span data-testid="checkout-bottom-btn-value"> Valor Total: X</span>
    </div>
  );
}
