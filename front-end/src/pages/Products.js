import React, { useEffect, useContext } from 'react';
import ProductCard from '../components/Products/ProductCard';
import TopBar from '../components/TopBar';
import { getAllProducts } from '../services/api';
import TrybeerContext from '../context/TrybeerContext';

function Products() {
  const { products, setProducts } = useContext(TrybeerContext);
  useEffect(() => {
    getAllProducts()
      .then((products) => setProducts(products));
  }, []);
  return (
    <div>
      <TopBar />
      <h1>Products</h1>
      { products.map((product, index) => {
        const { id, name, price, url_image } = product;
        return (
          <ProductCard
            key={ id }
            name={ name }
            price={ price }
            url_image={ url_image }
            index={ index }
          />
        )
      }) }
    </div>
  );
}

export default Products;
