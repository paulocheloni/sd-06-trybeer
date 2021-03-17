import React from 'react';
import { Link } from 'react-router-dom';

import './SideBar.css';

const linkInputs = [
  { title: 'Produtos',  to: '/products', id: 'side-menu-item-products' },
  { title: 'Meus Pedidos',  to: '/orders', id: 'side-menu-item-my-orders' },
  { title: 'Meu Perfil',  to: '/profile', id: 'side-menu-item-my-profile' },
  { title: 'Sair',  to: '/', id: 'side-menu-item-logout' },
];

function SideBar() {
  return (
    <div className="side-menu-container">
      {linkInputs.map((link, index) => {
        const { title, to, id } = link;

        return (
          <Link to={ to }>
            <button key={ index } className="botao" data-testid={ id } type="button">
              {title}
            </button>
          </Link>
        );
      })}
    </div>
  );
}

export default SideBar;
