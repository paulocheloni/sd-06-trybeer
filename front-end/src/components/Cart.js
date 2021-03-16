import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import TrybeerContext from '../context/TrybeerContext';

const Cart = () => {
  const { cart } = useContext(TrybeerContext);
  const history = useHistory();

  
  // const formatedPrice = JSON.stringify(`R$ ${cart.toFixed(2)}`).replace('.', ',');
  // const preco = JSON.parse(localStorage.getItem('userCart')).toFixed(2);
  // let prod;
  const preco = () => {
    const prod = JSON.parse(localStorage.getItem('userCart'));
    if (prod) {
      return JSON.stringify(`R$ ${prod}`).replace('.', ',');
    }
    return null;
  };

  const disabledButton = preco() === null || preco() === 0;

  useEffect(() => {
    preco();
  }, [cart]);

  return (
  <div>
    <button
      data-testid="checkout-bottom-btn"
      type="button"
      onClick={ () => history.push('/checkout') }
      disabled={ disabledButton }
      >
        Ver Carrinho
      </button>
      <p data-testid="checkout-bottom-btn-value">
        { preco() ? preco() : `R$ 0,00` }
      </p>
  </div>
)};

export default Cart;
