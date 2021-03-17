import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ContextBeer from '../context/ContextBeer';

function Card() {
  const {
    sale,
  } = useContext(ContextBeer);
  const { total } = sale;

  return (
    <Link to="/checkout">
      <button type="button" data-testid="checkout-bottom-btn">
        <h1>Ver carrinho R$</h1>
        <span data-testid="checkout-bottom-btn-value">{total}</span>
      </button>
    </Link>
  );
}

Card.propTypes = {
  total: PropTypes.shape({
    total: PropTypes.number.isRequired,
  }).isRequired,
};
export default Card;
