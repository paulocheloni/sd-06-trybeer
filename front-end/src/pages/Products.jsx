import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ProductsList from '../components/products/ProductsList';
import CheckoutCart from '../components/checkout/CheckoutCart';
import MenuTop from '../components/menu/MenuTop';

import ProductsContext from '../context/ProductsContext';
import CartContext from '../context/CartContext';

import api from '../services/api';

function Products({ history }) {
  const initialCart = JSON.parse(localStorage.cart || []);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.getAllProducts();
      setProducts(response);
    }
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={ { products } }>
      <CartContext.Provider value={ { cart, setCart, history } }>
        <MenuTop name="TryBeer" />
        <ProductsList />
        <CheckoutCart />
      </CartContext.Provider>
    </ProductsContext.Provider>
  );
}

Products.propTypes = {
  history: PropTypes.objectOf(Object).isRequired,
};

export default Products;
