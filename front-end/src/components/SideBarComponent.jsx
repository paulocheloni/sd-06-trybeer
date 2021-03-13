import React from 'react';
import { useHistory } from 'react-router-dom';

function SideBar() {

  const history = useHistory();

  return (
    <>
      <button
        type="button"
        data-testid="side-menu-item-products"
        onClick={() => history.push('/cliente/produtos') }
      >
        Produtos
      </button>
      <button
        type="button"
        data-testid="side-menu-item-my-orders"
        onClick={() => history.push('/cliente/meuspedidos') }
      >
        Meus pedidos
      </button>
      <button
        type="button"
        data-testid="side-menu-item-my-profile"
        onClick={() => history.push('/cliente/meuperfil') }
      >
        Meu Perfil
      </button>
      <button
        type="button"
        data-testid="side-menu-item-logout"
        onClick={ () => history.push('/login') }
      >
        Sair
      </button>
    </>
  )
};

export default SideBar;
