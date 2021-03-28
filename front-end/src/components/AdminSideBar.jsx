import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import '../css/ControllerHeader.css';
import '../css/Sidebar.css';
import '../css/AdminSidebar.css';
import beerLogo from '../img/beer.png'

function AdminSideBar() {
  const history = useHistory();
  return (
    <div
      className="sidebar"
      data-testid="admin-side-bar-container"
    >
      <Link to="/products" className="products-link">
        <section>
          <img src={beerLogo} alt=""/>
          <h3>Trybeer</h3>
        </section>
      </Link>
      <button
        type="button"
        data-testid="side-menu-item-orders"
        onClick={ () => history.push('/admin/orders') }
      >
        Pedidos
      </button>
      <button
        type="button"
        data-testid="side-menu-item-profile"
        onClick={ () => history.push('/admin/profile') }
      >
        Perfil
      </button>
      <button
        type="button"
        data-testid="side-menu-item-logout"
        onClick={ () => {
          localStorage.clear();
          history.push('/login');
        } }
      >
        Sair
      </button>
    </div>
  );
}

export default AdminSideBar;
