import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { redirectMenuBar } from '../services/index';

function MenuBar(props) {
  const history = useHistory();
  return (
    <div className="side-menu-container">
      <button
        data-testid="side-menu-item-products"
        onClick={ () => redirectMenuBar(history, 'client/products') }
      >
        Produtos
      </button>
      <button
        data-testid="side-menu-item-my-orders"
        onClick={ () => redirectMenuBar(history, 'client/meuspedidos') }
      >
        Meus Pedidos
      </button>
      <button
        data-testid="side-menu-item-my-profile"
        onClick={ () => redirectMenuBar(history, 'client/myprofile') }
      >
        Meu Perfil
      </button>
      <Link to="/home">
        <button
          data-testid="side-menu-item-logout"
        >
          Sair
        </button>
      </Link>
    </div>
  );
}

export default MenuBar;
