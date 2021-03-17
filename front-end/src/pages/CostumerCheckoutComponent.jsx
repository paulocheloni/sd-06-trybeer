import React from 'react';
import Header from '../components/HeaderComponent';

function CostumerCheckoutComponent() {
  return (
    <div>
      <Header text="Finalizar Pedido" id="top-title" />
      <h1>Produtos</h1>
      <p>CARD COM OS ITENS ESCOLHIDOS</p>
      <p>Total: { amount }</p>

      Endereço
      <form>
        <label htmlFor="street">
          Rua:
        <input type="text" />
        <label htmlFor="number">
          Número da casa:
        <input type="number" />
      </form>
      <button type="button" data-testid="top-title">Finalizar Pedido</button>
    </div>
  );
}

export default CostumerCheckoutComponent;
