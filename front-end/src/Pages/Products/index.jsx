import React from 'react';
import { useHistory } from 'react-router';
import CardProduct from '../../Components/CardProduct';
import Menu from '../../Components/Menu';

const Products = () => {
  const history = useHistory();
  const retrievedToken = (localStorage.getItem('token'));
  console.log(retrievedToken);
  if (!retrievedToken) history.push('/login');
  return (
    <>
      <Menu><p data-testid="top-title">TryBeer</p></Menu>
      <CardProduct />
    </>
  );
};
export default Products;
