import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import productsContext from '../context/productsContext';
import TopMenu from '../components/TopMenu';
import fetches from '../services/fetches';
import ProductsCard from '../components/ProductsCard';

export default function Products() {
  const history = useHistory();
  const tokenFromLocalStorage = localStorage.getItem('token');
  const { products, setProducts } = useContext(productsContext);

  useEffect(() => {
    const fetch = async () => {
      const allProducts = await fetches.fetchAllProducts();
      setProducts(allProducts.data);
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Garante que temos acesso a varíavel products atualizada
  useEffect(() => {
    console.log('produtos', products);
  }, [products]);

  const handleRedirect = (token) => {
    if (!token) return history.push('/login');
  };

  return (
    <div>
      <TopMenu pageTitle="TryBeer" />
      { handleRedirect(tokenFromLocalStorage) }
      <ProductsCard />
    </div>
  );
}
