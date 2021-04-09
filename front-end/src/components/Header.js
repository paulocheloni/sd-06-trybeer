import React, { useContext, useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { useHistory } from 'react-router';
import UserContext from '../context/UserContext';
import { HeaderStyled, DivTitle, DivHamburger } from '../styles/HeaderStyles';

function Header() {
  const { sidebar, setSidebar } = useContext(UserContext);

  const showSidebar = () => setSidebar(!sidebar);

  const [pathnameTitle, setPathnamerTitle] = useState('TryBeer');
  const history = useHistory();
  const { pathname } = history.location;

  useEffect(() => {
    const header = document.getSelection('top-title');
    if (pathname === '/profile') {
      header.innerHTML = 'Meu perfil';
      setPathnamerTitle(header.innerHTML);
    }
    if (pathname === '/admin/profile') {
      header.innerHTML = 'Admin - Meu Perfil';
      setPathnamerTitle(header.innerHTML);
    }
    if (pathname === '/checkout') {
      header.innerHTML = 'Finalizar Pedido';
      setPathnamerTitle(header.innerHTML);
    }
    if (pathname === '/orders') {
      header.innerHTML = 'Meus Pedidos';
      setPathnamerTitle(header.innerHTML);
    }
  }, [pathname]);

  return (
    <header>
      <HeaderStyled>
        <DivHamburger>
          <FaIcons.FaBars
            className="menu-bars"
            data-testid="top-hamburguer"
            onClick={ showSidebar }
          />
        </DivHamburger>
        <DivTitle>
          <h1 data-testid="top-title" className="top-title">{ pathnameTitle }</h1>
        </DivTitle>
      </HeaderStyled>
    </header>
  );
}

export default Header;
