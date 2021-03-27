import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { getProducts } from '../../services/Products';
import DrinkCard from '../../components/DrinkCard/DrinkCard';
import { verifyUser } from '../../store/LocalStorage/actions';
import { getFullCartPrice, getCart } from '../../store/LocalStorage/provider';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

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
    // history.push('/checkout'); !!!Adicionei passar a soma total como props
    history.push({
      pathname: '/checkout',
      state: { sum: cartSum },
    });
  };

  return (
    <div className="container">
      <div className="head">
        <Header title="TryBeer" user="client" />
      </div>
      <div className="main">
        {products.map((product, index) => (
          <DrinkCard
            product={ product }
            key={ product.id }
            index={ index }
            setCartSum={ setCartSum }
          />
        ))}
      </div>
      <div className="footer">
        <button
          className="btnCarrinho"
          data-testid="checkout-bottom-btn"
          onClick={ handleRedirect }
          type="button"
          disabled={ !getCart() || !getCart().length }
        >
          <FontAwesomeIcon icon={ faShoppingCart } />
        </button>
        <p data-testid="checkout-bottom-btn-value">
            {cartSum || 'R$ 0,00'}
        </p>
      </div>
    </div>
  );
}
