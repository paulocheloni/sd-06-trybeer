import React from 'react';
import { useHistory } from 'react-router-dom';
import '../style/SideBarCostumer.css';

function SideBar() {

  const history = useHistory();

  return (
    <div className='sidebar_costumer'>
      <button
        type="button"
        data-testid="side-menu-item-products"
        onClick={() => history.push('/cliente/produtos') }
        className='bttn_sidebar_costumer'
      >
        Produtos
      </button>
      <button
        type="button"
        data-testid="side-menu-item-my-orders"
        onClick={() => history.push('/cliente/meuspedidos') }
        className='bttn_sidebar_costumer'
      >
        Meus pedidos
      </button>
      <button
        type="button"
        data-testid="side-menu-item-my-profile"
        onClick={() => history.push('/cliente/meuperfil') }
        className='bttn_sidebar_costumer'
      >
        Meu Perfil
      </button>
      <button
        type="button"
        data-testid="side-menu-item-logout"
        onClick={ () => history.push('/login') }
        className='bttn_sidebar_costumer'
      >
        Sair
      </button>
    </div>
  )
};

export default SideBar;
