import React, { useContext } from 'react';
import { GlobalContext } from '../../Contexts/GlobalContext';

import CompSideBar from './styles';

const SideBar = () => {
  const { stateSideBar } = useContext(GlobalContext);

  return (
    <>
      {stateSideBar && (
        <CompSideBar>
          <a href="/#" data-testid="side-menu-item-products">Produtos</a>
          <a href="/#" data-testid="side-menu-item-my-orders">Meus pedidos</a>
          <a href="/#" data-testid="side-menu-item-my-profile">Meu Perfil</a>
          <a href="/#" data-testid="side-menu-item-logout">Sair</a>
        </CompSideBar>
      )}
    </>
  );
};

export default SideBar;
