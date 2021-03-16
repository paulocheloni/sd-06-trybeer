import React from 'react';
import { useHistory } from 'react-router-dom';
import TopMenu from '../components/TopMenu';

export default function Products() {
  const history = useHistory();
  const tokenFromLocalStorage = localStorage.getItem('token');

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
