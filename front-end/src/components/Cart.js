import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => (
  <div>
    <Link to="/checkout">
      <button data-testid="checkout-bottom-btn" type="button">Ver Carrinho</button>
    </Link>
    <p data-testid="checkout-bottom-btn-value">valor total do carrinho</p>
  </div>
);

export default Cart;
