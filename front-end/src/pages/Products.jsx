import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import TopBar from '../components/TopBar';
import ProductCard from '../components/ProductCard';
import CartButton from '../components/CartButton';
import { getAllProducts } from '../services/products';

function Products() {
  const [products, setProducts] = useState([]);

  const history = useHistory();

  const createList = () => {
    let productList = JSON.parse(localStorage.getItem('productList'));

    if (!productList) {
      productList = [];
      localStorage.setItem('productList', JSON.stringify(productList));
    }
  };

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (!user) history.push('/login');

    getAllProducts().then((json) => setProducts(json.products));
  }, []);

  useEffect(() => {
    createList();
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
