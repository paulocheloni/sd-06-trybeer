import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppContext from '../context/app.context';

export default function Sidebar(props) {
  const { setToken } = useContext(AppContext);
  const { hide } = props;
  const className = `side-menu-container ${hide}`;

  const history = useHistory();

  const logOff = () => {
    setToken({});
    history.push('/login');
  };

  return (
    <section className={ className }>
      <Link to="/products" data-testid="side-menu-item-products">
        Produtos
      </Link>
      <Link to="/orders" data-testid="side-menu-item-my-orders">
        Meus pedidos
      </Link>
      <Link to="/profile" data-testid="side-menu-item-my-profile">
        Meu perfil
      </Link>
      <button type="button" onClick={ logOff } data-testid="side-menu-item-logout">
        Sair
      </button>
    </section>
  );
}

Sidebar.propTypes = {
  hide: PropTypes.string,
};

Sidebar.defaultProps = {
  hide: 'hidden',
};
