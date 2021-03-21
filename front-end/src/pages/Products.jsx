import React, { useEffect, useState } from 'react';
import ProductsList from '../components/products/ProductsList';
import CheckoutCart from '../components/checkout/CheckoutCart';
import MenuTop from '../components/menu/MenuTop';

import ProductsContext from '../context/ProductsContext';
import CartContext from '../context/CartContext';
import { getAllProducts } from '../services/api';

function Products({ history }) {
  const [products] = useState(getAllProducts);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storageCart = JSON.parse(localStorage.cart);
    const storage = storageCart !== [] ? storageCart : [];
    setCart(storage);
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

export default Products;
