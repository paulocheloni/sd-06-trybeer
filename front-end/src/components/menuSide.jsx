import React from 'react';
import { Link } from 'react-router-dom';

function menuSide() {
  return (
    <div className="side-menu">
      <div>
        <Link to="/products">
          <button data-testid="side-menu-item-products" type="button">Produtos</button>
        </Link>
        <Link to="/orders">
          <button
            data-testid="side-menu-item-my-orders"
            type="button"
          >
            Meus Pedidos
          </button>
        </Link>
        <Link to="/profile">
          <button
            data-testid="side-menu-item-my-profile"
            type="button"
          >
            Meu Perfil
          </button>
        </Link>
      </div>
      <Link to="/login">
        <button data-testid="side-menu-item-logout" type="button">Sair</button>
      </Link>
    </div>
  );
}

export default menuSide;
