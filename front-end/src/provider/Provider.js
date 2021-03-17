import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TrybeerContext from '../context/TrybeerContext';

function TrybeerProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem('cart'));
    if (localCart) {
      setCart(localCart);
    }
  }, []);

  const updateProductQuantity = (id, quantity, price) => {
    const product = { id, quantity, price };
    const cartWithoutProduct = cart.filter((item) => item.id !== id);
    const newCart = [...cartWithoutProduct, product];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
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
