import React, { useEffect, useState } from 'react';

import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Skol Lata 250ml',
    price: 2.20,
    image: 'http://localhost:3001/images/Skol Lata 350ml.jpg',
  },
  {
    id: 2,
    name: 'Heineken 600ml',
    price: 7.50,
    image: 'http://localhost:3001/images/Heineken 600ml.jpg',
  },
  {
    id: 3,
    name: 'Antarctica Pilsen 300ml',
    price: 2.49,
    image: 'http://localhost:3001/images/Antarctica Pilsen 300ml.jpg',
  },
];

const ProductsList = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    localStorage.cart = JSON.stringify(cart);
  }, [cart]);

  const plusItemCart = (product) => {
    const currentProduct = cart.find((item) => item.id === product.id) || {
      ...product,
      quantity: 0,
    };

    currentProduct.quantity += 1;

    const addNewProduct = () => {
      const productIndex = cart.findIndex((item) => (item.id === product.id));
      setCart([...cart]);
      if (!cart[productIndex]) setCart([...cart, currentProduct]);
    };

    if (cart.length === 0) setCart([currentProduct]);
    else addNewProduct();
  };

  const minusItemCart = (product) => {
    cart[cart.findIndex((item) => item.id === product.id)].quantity -= 1;
    setCart([...cart]);
  };

  const handleItem = (product) => {
    const handleQuantity = cart.map((item) => {
      if (item.id === product.id) {
        return item.quantity;
      }
      return true;
    });

    const isProductOnCart = cart.length !== 0 ? handleQuantity : 0;
    return isProductOnCart;
  };

  return products.map((product, index) => (
    <ProductCard
      key={ index }
      index={ index }
      product={ product }
      plusItemCart={ plusItemCart }
      minusItemCart={ minusItemCart }
      handleItem={ handleItem }
    />
  ));
};

export default ProductsList;
