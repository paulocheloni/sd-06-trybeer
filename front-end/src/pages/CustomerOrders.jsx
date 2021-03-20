import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import OrderCard from '../components/OrderCard';
import TopMenu from '../components/TopMenu';
import productsContext from '../context/productsContext';

export default function Orders() {
  const { orders } = useContext(productsContext);
  const tokenFromLocalStorage = localStorage.getItem('token');
  const history = useHistory();

  const handleRedirect = (token) => {
    if (!token) return history.push('/login');
  };

  return (
    <div>
      <TopMenu pageTitle="Meus pedidos" />
      <OrderCard orders={ orders } />
      { handleRedirect(tokenFromLocalStorage) }
    </div>
  );
}
