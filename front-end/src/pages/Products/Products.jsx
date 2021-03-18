import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { getProducts } from '../../services/Products';
import DrinkCard from '../../components/DrinkCard/DrinkCard';
import Button from '../../components/Button/Button';
import { useHistory } from 'react-router-dom';

// O botão 'Ver Carrinho' deverá conter a tag data-testid="checkout-bottom-btn"

// O valor total do carrinho deverá conter a tag data-testid="checkout-bottom-btn-value"

export default function Products() {
  const [products, setProducts] = useState([]);
  const history = useHistory();
  useEffect(async () => {
    const storage = JSON.parse(localStorage.getItem('user'));
    console.log(storage);
    const allProducts = await getProducts();
    setProducts(allProducts);
  }, []);

  const handleRedirect = () => {
    history.push('/checkout');
  }
  return (
    <div>
      <Header title="TryBeer" user="client" />
      {products.map((product, index) => (
        <DrinkCard productPayload={ product } index={ index } />
      ))}
      <Button
        title='Ver Carrinho'
        testId='checkout-bottom-btn'
        onClick={handleRedirect}
      />
    </div>
  );
}
