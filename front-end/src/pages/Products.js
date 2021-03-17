import React, { useEffect } from 'react';
import ProductCard from '../components/Products/ProductCard';
import TopBar from '../components/TopBar';
import getAllProducts from '../services/api';

function Products() {

  useEffect(() => {
    getAllProducts()
      .then((products) => {
        // nada
      });
  }, []);
  return (
    <div>
      <TopBar />
      <h1>Products</h1>
      <ProductCard />
    </div>
  );
}

export default Products;
