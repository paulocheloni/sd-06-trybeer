import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { FaListAlt, FaUserAlt } from 'react-icons/fa';
import { ImExit } from 'react-icons/im';

import { GlobalContext } from '../../Contexts/GlobalContext';

import S from './styles';

const navigationPages = ({ history }, route) => {
  if (route === '/login') localStorage.removeItem('user');

  history.push(route);
};

const SideBarAdmin = () => {
  const [route, setRoute] = useState();

  const { stateSideBarAdmin } = useContext(GlobalContext);

  const history = useHistory();

  const params = {
    history,
    setRoute,
    route,
  };

  return (
    <div>
      <S.CompSideBar
        stateSideBarAdmin={ stateSideBarAdmin }
        className="admin-side-bar-container"
      >
        <S.Navigation
          onClick={ () => navigationPages(params, '/admin/orders') }
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
          onClick={ () => navigationPages(params, '/admin/profile') }
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
          onClick={ () => navigationPages(params, '/login') }
          data-testid="side-menu-item-logout"
        >
          <ImExit
            className="icon"
            fill="#cf8d2e"
            size="25px"
          />
          Sair
        </S.Navigation>
      </S.CompSideBar>
    </div>
  );
};

export default SideBarAdmin;
