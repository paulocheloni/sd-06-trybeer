import React from 'react';

function Header(props) {
  // const arrayTitles = ['TryBeer', 'Meus Pedidos', 'Detalhes de Pedido',
  //   'Meu perfil', 'Finalizar Pedido'];
  return (
    <div>
      <h1 data-testid="top-title">
        {(props.title) ? props.title : 'Trybeer'}
      </h1>
    </div>
  );
}

export default Header;
