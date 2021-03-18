import React, { useEffect, useState } from 'react';
import TopBar from '../components/TopBar';
import ProductCard from '../components/ProductCard';
import CartButton from '../components/CartButton';
import { getAllProducts } from '../services/products';

function Products() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getAllProducts().then((json) => setProducts(json.products));
  }, []);

  useEffect(() => {
    let productList = JSON.parse(localStorage.getItem('productList'));

    if (!productList) {
      productList = []
      localStorage.setItem('productList', JSON.stringify(productList));
    }

  }, []);
  

  return !products ? <h1>Loading...</h1> : (
    <div>
      <TopBar name="TryBeer" />
      {products.map((product, index) => (
        <ProductCard key={ product.id } productInfo={ product } index={ index } />
      ))}
      <CartButton />
    </div>
  );
}

export default Products;
