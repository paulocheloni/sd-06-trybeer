import React from 'react';
import { Link } from 'react-router-dom';

import './SideBarClient.css';

function SideBarClient() {
  return (
    <div className="side-menu-container">
      <Link to="/products">
        <button className="botao" data-testid="side-menu-item-products" type="button">
          Produtos
        </button>
      </Link>

      <Link to="/orders">
        <button className="botao" data-testid="side-menu-item-my-orders" type="button">
          Meus Pedidos
        </button>
      </Link>

      <Link to="/profile">
        <button className="botao" data-testid="side-menu-item-my-profile" type="button">
          Meu Perfil
        </button>
      </Link>

      <Link to="/">
        <button className="botao" data-testid="side-menu-item-logout" type="button">
          Sair
        </button>
      </Link>
    </div>
  );
}

export default SideBarClient;
