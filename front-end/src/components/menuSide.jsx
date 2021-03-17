import React from 'react';
import { useHistory } from 'react-router-dom';

function MenuSide() {
  const route = useHistory();
  return (
    <div className="side-menu">
      <button
        data-testid="side-menu-item-products"
        type="button"
        onClick={ () => route.push('/products') }
      >
        Produtos
      </button>
      <button
        data-testid="side-menu-item-my-orders"
        type="button"
        onClick={ () => route.push('/orders') }
      >
        Meus Pedidos
      </button>
      <button
        data-testid="side-menu-item-my-profile"
        type="button"
        onClick={ () => route.push('/profile') }
      >
        Meu Perfil
      </button>
      <button
        data-testid="side-menu-item-logout"
        type="button"
        onClick={ () => {
          localStorage.clear();
          route.push('/login');
        } }
      >
        Sair
      </button>
    </div>
  );
}

export default MenuSide;
