import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../Contexts/GlobalContext';

import CompMenuTop from './styles';

const MenuTop = () => {
  const [pathName, setPathName] = useState('');

  const { stateSideBar, setStateSideBar } = useContext(GlobalContext);

  useEffect(() => {
    switch (window.location.pathname) {
    case '/profile':
      return setPathName('Meu perfil');
    default:
      return '';
    }
  }, []);

  return (
    <CompMenuTop className="side-menu-container">
      <img
        src="/images/cardapio.png"
        alt="Botão MenuTop"
        onClick={ () => setStateSideBar(!stateSideBar) }
        data-testid="top-hamburguer"
      />
      <h2 data-testid="top-title">{pathName}</h2>
    </CompMenuTop>
  );
};

export default MenuTop;
