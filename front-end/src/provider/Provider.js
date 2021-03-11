import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TrybeerContext from '../context/TrybeerContext';

function TrybeerProvider({ children }) {
  const [products, setProducts] = useState({
    name: 'products',
    quantity: '58',
    unitPrice: '6,50',
  });

  const contextValue = {
    products,
    setProducts,
  };
  return (
    <TrybeerContext.Provider value={ contextValue }>
      {children}
    </TrybeerContext.Provider>
  );
}

TrybeerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TrybeerProvider;
