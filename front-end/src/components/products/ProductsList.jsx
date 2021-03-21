import React, { useContext, useEffect, useState } from 'react';

import { ProductsContext } from '../../context/ProductsContext';
import ProductCard from './ProductCard';

const ProductsList = () => {
  const { products } = useContext(ProductsContext);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storageCart = JSON.parse(localStorage.cart);
    const storage = storageCart !== [] ? storageCart : [];
    setCart(storage);
  }, []);

  const plusItemCart = (product) => {
    const currentProduct = cart.find((item) => item.id === product.id) || {
      ...product,
      quantity: 0,
    };

    currentProduct.quantity += 1;
    localStorage.cart = JSON.stringify(cart);
    const addNewProduct = () => {
      const productIndex = cart.findIndex((item) => (item.id === product.id));
      setCart([...cart]);
      if (!cart[productIndex]) setCart([...cart, currentProduct]);
    };

    if (cart.length === 0) setCart([currentProduct]);
    else addNewProduct();
  };

  const minusItemCart = (product) => {
    const currentProduct = cart.find((item) => item.id === product.id) || {
      ...product,
      quantity: 0,
    };

    localStorage.cart = JSON.stringify(cart);

    if (currentProduct.quantity > 0) {
      cart[cart.findIndex((item) => item.id === product.id)].quantity -= 1;
      setCart([...cart]);
    }
  };

  const handleQuantity = (product) => {
    const currentProduct = cart.find((item) => item.id === product.id) || {
      ...product,
      quantity: 0,
    };

    return currentProduct.quantity;
  };

  return products.map((product, index) => (
    <ProductCard
      key={ index }
      index={ index }
      product={ product }
      plusItemCart={ plusItemCart }
      minusItemCart={ minusItemCart }
      handleQuantity={ handleQuantity }
    />
  ));
};

export default ProductsList;
