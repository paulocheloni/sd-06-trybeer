import React, { useContext } from 'react';

import { FaListAlt, FaUserAlt } from 'react-icons/fa';
import { ImExit } from 'react-icons/im';

import { GlobalContext } from '../../Contexts/GlobalContext';

import S from './styles';

const SideBarAdmin = () => {
  const { stateSideBarAdmin } = useContext(GlobalContext);

  return (
    <div>
      {stateSideBarAdmin && (
        <S.CompSideBar className="admin-side-bar-container">
          <S.Navigation
            href="/admin/orders"
            data-testid="side-menu-item-orders"
          >
            <FaListAlt
              className="icon"
              fill="#cf8d2e"
              size="25px"
            />
            Pedidos
          </S.Navigation>
          <S.Navigation
            href="/admin/profile"
            data-testid="side-menu-item-profile"
          >
            <FaUserAlt
              className="icon"
              fill="#cf8d2e"
              size="25px"
            />
            Perfil
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

export default SideBarAdmin;
