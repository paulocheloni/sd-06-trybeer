import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import productsContext from './productsContext';
// import fetches from '../services/fetches';

export default function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  /* const fetchProducts = async () => {
    const result = await fetches.fetchAllProducts();
    setProducts(result);
    console.log(result);
  }; */
  useEffect(() => {
    const handleFetchProducts = async () => {
      await axios
        .get('http://localhost:3001/products').then((response) => {
          console.log(response.data);
          return response.data;
        });
    };
  }, []);

  const context = {
    products,
  };
  return (
    <productsContext.Provider value={ context }>
      {children}
    </productsContext.Provider>
  );
}

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
