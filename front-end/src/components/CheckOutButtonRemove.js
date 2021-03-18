import React, { useState, useEffect, useContext } from 'react';
import { loadState, saveState } from '../services/localStorage';
import context from '../Context/ContextAPI';

function CheckoutButtonRemove({productIndex}) {
  const {cart, setCart} = useContext(context);
  const [totalValue, setTotalValue] = useState();
  const [emailUser, setEmailUser] = useState('');

  useEffect(() => {
    const loadUser = loadState('user');
    setEmailUser(loadUser.email);
    const cartStorage = loadState(loadUser.email);
    setCart(cartStorage);

    const totalPriceStorage = loadState(`${loadUser.email}_price`);
    setTotalValue(totalPriceStorage);
  }, []);

  const removeCheckout = () => {
    const newTotalValue = (totalValue - cart[productIndex].totalPrice).toFixed(2);
    setTotalValue(newTotalValue);
    saveState(`${emailUser}_price`, newTotalValue);

    cart.splice(productIndex, 1);
    saveState(`${emailUser}`, cart);
  }

  return(
    <button type="button" onClick={removeCheckout}>
      X
    </button>
  )
}
export default CheckoutButtonRemove;
