import React from 'react';

function Header() {
  const arrayTitles = [ 'TryBeer', 'Meus Pedidos', 'Detalhes de Pedido',
  'Meu perfil', 'Finalizar Pedido']
  return (
    <div>
      <h1 data-testid="top-title">
        Trybeer
      </h1>
    </div>
  );
}

export default Header;
