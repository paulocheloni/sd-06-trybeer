import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

import { getAllProducts } from '../services/api';

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products] = useState(getAllProducts);

  return (
    <ProductsContext.Provider value={ { products } }>
      { children }
    </ProductsContext.Provider>
  );
};

ProductsContextProvider.propTypes = ({
  children: PropTypes.node.isRequired,
});

export default ProductsContextProvider;
