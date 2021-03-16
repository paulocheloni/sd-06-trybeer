import React, { useContext } from 'react';

import { IoIosBeer } from 'react-icons/io';
import { FaListAlt, FaUserAlt } from 'react-icons/fa';
import { ImExit } from 'react-icons/im';

import { GlobalContext } from '../../Contexts/GlobalContext';

import S from './styles';

const SideBar = () => {
  const { stateSideBar } = useContext(GlobalContext);

  return (
    <div>
      {stateSideBar && (
        <S.CompSideBar className="side-menu-container">
          <S.Navigation
            href="/products"
            data-testid="side-menu-item-products"
          >
            <IoIosBeer
              className="icon"
              fill="#cf8d2e"
              size="30px"
            />
            Produtos
          </S.Navigation>
          <S.Navigation
            href="/orders"
            data-testid="side-menu-item-my-orders"
          >
            <FaListAlt
              className="icon"
              fill="#cf8d2e"
              size="25px"
            />
            Meus pedidos
          </S.Navigation>
          <S.Navigation
            href="/profile"
            data-testid="side-menu-item-my-profile"
          >
            <FaUserAlt
              className="icon"
              fill="#cf8d2e"
              size="25px"
            />
            Meu Perfil
          </S.Navigation>

          <S.Navigation
            className="get-out"
            href="/login"
            data-testid="side-menu-item-logout"
            onClick={ () => localStorage.removeItem('user') }
          >
            <ImExit
              className="icon"
              fill="#cf8d2e"
              size="25px"
            />
            Sair
          </S.Navigation>
        </S.CompSideBar>
      )}
    </div>
  );
};

export default SideBar;
