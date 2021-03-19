import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import GetProducts from '../../services/GetProducts';
import CardProduct from '../../Components/CardProduct';
import Menu from '../../Components/Menu';

const Products = () => {
  const [products, setProducts] = useState([]);
  const history = useHistory();
  useEffect(() => {
    if (localStorage.products && localStorage.products !== '[]') {
      setProducts(JSON.parse(localStorage.products));
    }
    GetProducts(setProducts);
  }, []);
  useEffect(() => {
    if (!window.localStorage.token) {
      history.push('/login');
    }
  });
  return (
    <>
      <Menu><p data-testid="top-title">TryBeer</p></Menu>
      <CardProduct products={ products } setProducts={ setProducts } />
    </>
  );
};
export default Products;
