import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import {
  DivNav, DivNavContent,
} from '../styles/NavbarStyles';
import TrybeerContext from '../context/TrybeerContext';

function Navbar() {
  const { sidebar } = useContext(TrybeerContext);

  return (
    <div>
      <DivNav
        style={ sidebar ? { width: '100%' } : { width: '0%' } }
      >
        <DivNavContent className="side-menu-container">
          <Link to="/products" data-testid="side-menu-item-products">Produtos</Link>
          <Link to="/orders" data-testid="side-menu-item-my-orders">Meus pedidos</Link>
          <Link to="/profile" data-testid="side-menu-item-my-profile">Meu Perfil</Link>
          <Link to="/login" data-testid="side-menu-item-logout">Sair</Link>
        </DivNavContent>
      </DivNav>
    </div>
  );
}

export default Navbar;
