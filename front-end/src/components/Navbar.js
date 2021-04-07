import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  DivNav, DivNavContent,
} from '../styles/NavbarStyles';
import UserContext from '../context/UserContext';

function Navbar() {
  const { sidebar, setSidebar } = useContext(UserContext);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <DivNav
        style={ sidebar ? { width: '100%' } : { width: '0%' } }
      >
        <DivNavContent className="side-menu-container">
          <Link
            to="/products"
            data-testid="side-menu-item-products"
            onClick={ showSidebar }
          >
            Produtos
          </Link>
          <Link
            to="/orders"
            data-testid="side-menu-item-my-orders"
            onClick={ showSidebar }
          >
            Meus pedidos
          </Link>
          <Link
            to="/profile"
            data-testid="side-menu-item-my-profile"
            onClick={ showSidebar }
          >
            Meu Perfil
          </Link>
          <Link
            to="/login"
            data-testid="side-menu-item-logout"
            onClick={ showSidebar }
          >
            Sair
          </Link>
        </DivNavContent>
      </DivNav>
    </div>
  );
}

export default Navbar;
