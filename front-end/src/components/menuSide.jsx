import React from 'react';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

function MenuSide() {
  const route = useHistory();
  const user = JSON.parse(localStorage.getItem('user'));
  try {
    let modify = '-my-';
    let urlRoute = '';
    if (user.role && user.role === 'administrator') {
      urlRoute = '/admin';
      modify = '-';
    }
    return (
      <div className="side-menu-container">
        <button
          data-testid="side-menu-item-products"
          type="button"
          onClick={ () => route.push(`/products`) }
        >
          Produtos
        </button>
        <button
          data-testid={`side-menu-item${modify}orders`}
          type="button"
          onClick={ () => route.push(`${urlRoute}/orders`) }
        >
          Meus Pedidos
        </button>
        <button
          data-testid={`side-menu-item${modify}profile`}
          type="button"
          onClick={ () => route.push(`${urlRoute}/profile`) }
        >
          Meu Perfil
        </button>
        <button
          data-testid="side-menu-item-logout"
          type="button"
          onClick={ () => {
            localStorage.clear();
            route.push('/login');
          } }
        >
          Sair
        </button>
      </div>
    );
  } catch (err) {
    return <Redirect to="/login" />;
  }
}

export default MenuSide;
