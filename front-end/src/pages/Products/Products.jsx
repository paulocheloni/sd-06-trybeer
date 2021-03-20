import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { getProducts } from '../../services/Products';
import DrinkCard from '../../components/DrinkCard/DrinkCard';
import Button from '../../components/Button/Button';
import { getFullCartPrice } from '../../utils/localStorageHandler'

import { useHistory } from 'react-router-dom';
import { verifyUser } from '../../utils/localStorageHandler';


// O botão 'Ver Carrinho' deverá conter a tag data-testid="checkout-bottom-btn"

// O valor total do carrinho deverá conter a tag data-testid="checkout-bottom-btn-value"

export default function Products() {
  const [products, setProducts] = useState([]);
  const [cartSum, setCartSum] = useState(getFullCartPrice());

  const history = useHistory();

  useEffect(async () => {
    verifyUser(history);
    const allProducts = await getProducts();
    setProducts(allProducts);
  }, []);

  const handleRedirect = () => {
    history.push('/checkout');
  }

  console.log(products)
  return (
    <div>
      <Header title="TryBeer" user="client" />
      {products.map((product, index) => (
        <DrinkCard productPayload={ product } index={ index } setCartSum={setCartSum}/>
      ))}
      <Button
        title={`Ver carrrinho R$ ${cartSum}`}
        testId='checkout-bottom-btn'
        onClick={handleRedirect}
      />
    </div>
  );
}
