import React, { useContext } from 'react';
import * as FaIcons from 'react-icons/fa';
import TrybeerContext from '../context/TrybeerContext';
import { HeaderStyled, DivTitle, DivHamburger } from '../styles/HeaderStyles';

function Header() {
  const { sidebar, setSidebar } = useContext(TrybeerContext);

  const showSidebar = () => setSidebar(!sidebar);

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
          <h1 data-testid="top-title">TryBeer</h1>
        </DivTitle>
      </HeaderStyled>
    </header>
  );
}

export default Header;
