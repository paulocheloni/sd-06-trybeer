import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import productsContext from './productsContext';
import fetches from '../services/fetches';

export default function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const tokenFromLocalStorage = localStorage.getItem('token');

  useEffect(() => {
    const fetch = async () => {
      const allOrders = await fetches.getSales(tokenFromLocalStorage);
      // console.log('orders provider', allOrders.data);
      setOrders(allOrders.data);
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const context = {
    products,
    setProducts,
    cartProducts,
    setCartProducts,
    orders,
    setOrders,
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
