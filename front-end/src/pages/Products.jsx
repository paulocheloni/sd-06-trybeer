import React, { useEffect, useState } from 'react';
import TopBar from '../components/TopBar';
import ProductCard from '../components/ProductCard';
import { getAllProducts } from '../services/products';


function Products() {
  const [products, setProducts] = useState([])
  
  useEffect(()=> {
    getAllProducts().then(({products}) => setProducts(products));
  }, [])

  return !products ? <h1>Loading...</h1> : (
    <div>
      <TopBar name="TryBeer" />
      {products.map((product) => (
        <ProductCard key={ product.id } productInfo={ product } />
      ))}
    </div>
  );
}

export default Products;
