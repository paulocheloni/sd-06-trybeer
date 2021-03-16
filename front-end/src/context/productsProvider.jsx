import React from 'react';
import PropTypes from 'prop-types';
import productsContext from './productsContext';

export default function ProductsProvider({ children }) {
  return (
    <productsContext.Provider value={ context }>
      {children}
    </productsContext.Provider>
  );
}

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
