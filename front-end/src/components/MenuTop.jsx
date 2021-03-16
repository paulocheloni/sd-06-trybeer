import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MenuTop(props) {
  const { title } = props;
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <button
        type="button"
        data-testid="top-hamburguer"
        onClick={ handleClick }
      >
        &#9776;
      </button>
      <h1 data-testid="top-title">{title}</h1>
      {isVisible && (
        <div className="side-menu-container">
          <nav>
            <div>
              <Link
                to="/products"
                data-testid="side-menu-item-products"
              >
                Produtos
              </Link>
              <Link
                to="/orders"
                data-testid="side-menu-item-my-orders"
              >
                Meus Pedidos
              </Link>
              <Link
                to="/profile"
                data-testid="side-menu-item-my-profile"
              >
                Meu Perfil
              </Link>
              <Link
                to="/login"
                data-testid="side-menu-item-logout"
              >
                Sair
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}

MenuTop.propTypes = {
  title: PropTypes.string.isRequired,
};
