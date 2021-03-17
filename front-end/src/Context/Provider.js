import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextAPI from './ContextAPI';

const TrybeerProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const contextState = {
    cart,
    setCart,
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
