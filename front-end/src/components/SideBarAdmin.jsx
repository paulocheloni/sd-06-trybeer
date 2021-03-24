import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import BeersAppContext from '../context/BeersAppContext';

function AdminSideBar() {
  const history = useHistory();
  const {
    setUser,
  } = useContext(BeersAppContext);

  return (
    <div className="admin-side-bar-container">
      <h1>TryBeer</h1>
      <button
        type="button"
        data-testid="side-menu-item-orders"
        onClick={ () => history.push('/admin/orders') }
        className="bttn_sidebar_admin"

      >
        Pedidos
      </button>
      <button
        type="button"
        data-testid="side-menu-item-profile"
        onClick={ () => history.push('/admin/profile') }
        className="bttn_sidebar_admin"
      >
        Perfil
      </button>
      <button
        type="button"
        data-testid="side-menu-item-logout"
        onClick={ () => {
          setUser({});
          history.push('/login');
        } }
        className="bttn_sidebar_admin_botton"
      >
        Sair
      </button>
    </div>
  );
}

export default AdminSideBar;
