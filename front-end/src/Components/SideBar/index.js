import React, { useContext } from 'react';
import { GlobalContext } from '../../Contexts/GlobalContext';

import S from './styles';

const SideBar = () => {
  const { stateSideBar } = useContext(GlobalContext);

  return (
    <div>
      {stateSideBar && (
        <S.CompSideBar>
          <S.Navigation
            href="/#"
            data-testid="side-menu-item-products"
          >
            Produtos
          </S.Navigation>
          <S.Navigation
            href="/#"
            data-testid="side-menu-item-my-orders"
          >
            Meus pedidos
          </S.Navigation>
          <S.Navigation
            href="/#"
            data-testid="side-menu-item-my-profile"
          >
            Meu Perfil
          </S.Navigation>

          <S.Navigation
            className="get-out"
            href="/#"
            data-testid="side-menu-item-logout"
          >
            Sair
          </S.Navigation>
        </S.CompSideBar>
      )}
    </div>
  );
};

export default SideBar;
