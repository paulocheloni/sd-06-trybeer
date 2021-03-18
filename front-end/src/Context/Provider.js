import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextAPI from './ContextAPI';

const TrybeerProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  const contextState = {
    cart,
    setCart,
    price,
    setPrice,
  };

  return (
    <ContextAPI.Provider value={ contextState }>
      { children }
    </ContextAPI.Provider>
  );
};

TrybeerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TrybeerProvider;
