import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import BeersAppContext from '../context/BeersAppContext';
import '../style/SideBarCostumer.css';

function SideBar() {
  const history = useHistory();
  const {
    setUser,
  } = useContext(BeersAppContext);

  return (
    <div>
      <button
        type="button"
        data-testid="side-menu-item-products"
        onClick={ () => history.push('/products') }
        className="bttn_sidebar_costumer"
      >
        Produtos
      </button>
      <button
        type="button"
        data-testid="side-menu-item-my-orders"
        onClick={ () => history.push('/orders') }
        className="bttn_sidebar_costumer"
      >
        Meus pedidos
      </button>
      <button
        type="button"
        data-testid="side-menu-item-my-profile"
        onClick={ () => history.push('/profile') }
        className="bttn_sidebar_costumer"
      >
        Meu Perfil
      </button>
      <button
        type="button"
        data-testid="side-menu-item-logout"
        onClick={ () => {
          setUser({});
          history.push('/login');
        } }
        className="bttn_sidebar_costumer"
      >
        Sair
      </button>
    </div>
  );
}

export default SideBar;