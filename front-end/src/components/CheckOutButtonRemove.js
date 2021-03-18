import React, { useState, useEffect, useContext } from 'react';
import { loadState, saveState } from '../services/localStorage';
import context from '../Context/ContextAPI';

function CheckoutButtonRemove({productIndex, productId}) {
  const {cart, setCart, price, setPrice} = useContext(context);
  // const [price, setTotalValue] = useState();
  const [emailUser, setEmailUser] = useState('');

  useEffect(() => {
    const loadUser = loadState('user');
    setEmailUser(loadUser.email);
    const cartStorage = loadState(loadUser.email);
    setCart(cartStorage);

    const totalPriceStorage = loadState(`${loadUser.email}_price`);
    setPrice(totalPriceStorage);
  }, []);

  const removeCheckout = () => {
    const newTotalValue = (price - cart[productIndex].totalPrice).toFixed(2);
    setPrice(newTotalValue);
    saveState(`${emailUser}_price`, newTotalValue);

    const updateCart = cart.filter((element) => element.id !== productId);
    setCart(updateCart);
    saveState(`${emailUser}`, updateCart);
  }

  return(
    <button type="button" onClick={removeCheckout}>
      X
    </button>
  )
}
export default CheckoutButtonRemove;
