import React, { useState } from 'react';

// Proptypes
import PropTypes from 'prop-types';

// Context
import BeerContext from '../context/BeerContext';

export default function BeerProvider({ children }) {
  const [idOrder, setIdOrder] = useState('');

  const context = {
    idOrder,
    setIdOrder,
  };

  return (
    <BeerContext.Provider value={ context }>
      { children }
    </BeerContext.Provider>
  );
}

BeerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
