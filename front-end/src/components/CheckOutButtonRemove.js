import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { loadState, saveState } from '../services/localStorage';
import context from '../Context/ContextAPI';

function CheckoutButtonRemove({ productIndex, productId }) {
  const { cart, setCart, price, setPrice } = useContext(context);
  const [emailUser, setEmailUser] = useState('');

  useEffect(() => {
    const loadUser = loadState('user');
    setEmailUser(loadUser.email);
    const cartStorage = loadState(loadUser.email);
    setCart(cartStorage);
  }, [setCart]);

  const removeCheckout = () => {
    const newTotalValue = (price - cart[productIndex].totalPrice).toFixed(2);
    setPrice(newTotalValue);
    saveState(`${emailUser}_price`, newTotalValue);

    const updateCart = cart.filter((element) => element.id !== productId);
    setCart(updateCart);
    saveState(`${emailUser}`, updateCart);
  };

  return (
    <button data-testid="0-removal-button" type="button" onClick={ removeCheckout }>
      X
    </button>
  );
}
export default CheckoutButtonRemove;

CheckoutButtonRemove.propTypes = {
  productIndex: PropTypes.string.isRequired,
  productId: PropTypes.string.isRequired,
};
