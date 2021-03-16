import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import productsContext from '../context/productsContext';
import TopMenu from '../components/TopMenu';
import fetches from '../services/fetches';

export default function Products() {
  const history = useHistory();
  const tokenFromLocalStorage = localStorage.getItem('token');
  const { products, fetchProducts } = useContext(productsContext);
  console.log('produtos', products);

  const handleRedirect = (token) => {
    if (!token) return history.push('/login');
  };

  return (
    <div>
      <TopMenu pageTitle="TryBeer" />
      { handleRedirect(tokenFromLocalStorage) }
    </div>
  );
}
