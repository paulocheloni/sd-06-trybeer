import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductsContext from './ProductsContext';

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [productsInCart, setProductsInCart] = useState([]);

  const value = {
    products,
    setProducts,
    totalPrice,
    setTotalPrice,
    productsInCart,
    setProductsInCart,
  };

  return (
    <ProductsContext.Provider value={ value }>
      {children}
    </ProductsContext.Provider>
  );
}

ProductsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductsProvider;
