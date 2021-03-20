import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { getProducts } from '../../services/Products';
import DrinkCard from '../../components/DrinkCard/DrinkCard';
import Button from '../../components/Button/Button';
import { getFullCartPrice, verifyUser } from '../../utils/localStorageHandler';

// O botão 'Ver Carrinho' deverá conter a tag data-testid="checkout-bottom-btn"

// O valor total do carrinho deverá conter a tag data-testid="checkout-bottom-btn-value"

export default function Products() {
  const [products, setProducts] = useState([]);
  const [cartSum, setCartSum] = useState(getFullCartPrice());

  const history = useHistory();

  useEffect(() => {
    const fetchProducts = async () => {
      verifyUser(history);
      const allProducts = await getProducts();
      setProducts(allProducts);
    };
    fetchProducts();
  }, [history]);

  const handleRedirect = () => {
    history.push('/checkout');
  };

  return (
    <div>
      <Header title="TryBeer" user="client" />
      {products.map((product, index) => (
        <DrinkCard
          product={ product }
          key={ product.id }
          index={ index }
          setCartSum={ setCartSum }
        />
      ))}
      <Button
        title={ `Ver carrrinho R$ ${cartSum}` }
        testId="checkout-bottom-btn"
        onClick={ handleRedirect }
      />
    </div>
  );
}
