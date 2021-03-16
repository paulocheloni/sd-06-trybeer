import React from 'react';
import { useHistory } from 'react-router-dom';

function SideBar() {
  const history = useHistory();
  return (
    <div className="side-menu-container">
      <div>SideBar</div>
      <button
        type="button"
        data-testid="side-menu-item-products"
        onClick={ () => history.push('/products') }
      >
        Produtos
      </button>
      <button
        type="button"
        data-testid="side-menu-item-my-orders"
        onClick={ () => history.push('/orders') }
      >
        Meus Pedidos
      </button>
      <button
        type="button"
        data-testid="side-menu-item-my-profile"
        onClick={ () => history.push('profile') }
      >
        Meu Perfil
      </button>
      <button
        type="button"
        data-testid="side-menu-item-logout"
        onClick={ () => history.push('/login') }
      >
        Sair
      </button>
    </div>
  );
}

export default SideBar;
