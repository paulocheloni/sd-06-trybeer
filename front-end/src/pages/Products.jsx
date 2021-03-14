import React, { useEffect, useState } from 'react';
import fetchProducts from '../methods/products';
import renderCards from '../components/RenderCards';
import './Products.css';

function Products() {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(
    () => {
      (async () => {
        setAllProducts(await fetchProducts());
      })();
    }, [],
  );
  return (
    <>
      <h1>Products</h1>
      <section className="cards-container">
        {renderCards(allProducts)}
      </section>
    </>
  );
}
export default Products;
