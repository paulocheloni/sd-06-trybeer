import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TrybeerContext from '../context/TrybeerContext';

function TrybeerProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const updateProductQuantity = (id, quantity, price) => {
    const product = { id, quantity, price };
    console.log(product);
    const cartWithoutProduct = cart.filter((item) => item.id !== id);
    setCart([...cartWithoutProduct, product]);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const contextValue = {
    cart,
    setCart,
    updateProductQuantity,
    email,
    setEmail,
    password,
    setPassword,
  };

  return (
    <TrybeerContext.Provider value={ contextValue }>
      { children }
    </TrybeerContext.Provider>
  );
}

TrybeerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TrybeerProvider;
