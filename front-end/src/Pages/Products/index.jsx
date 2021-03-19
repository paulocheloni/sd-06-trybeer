import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CardProduct from '../../Components/CardProduct';
import Menu from '../../Components/Menu';

const Products = () => {
  const history = useHistory();
  useEffect(() => {
    if (!window.localStorage.token) {
      history.push('/login'); 
    }
  })
  return (
  <>
    <Menu><p data-testid="top-title">TryBeer</p></Menu>
    <CardProduct />
  </>
)
};
export default Products;
