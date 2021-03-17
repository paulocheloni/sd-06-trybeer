import React, { useEffect, useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import fetchProducts from '../methods/products';
import renderCards from '../components/RenderCards';
import isLogged from '../components/isLogged';
import MenuTop from '../components/menuTop';
import './Products.css';

const currencyFormat = (num) => num
  .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

const itemQty = (prod) => {
  const items = JSON.parse(localStorage.getItem('items'));
  if (items) {
    const qty = items.filter((e) => e.id === prod.id);
    return qty.length;
  }
  return 0;
};

function Products() {
  const route = useHistory();
  const [allProducts, setAllProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [asd, setAsd] = useState(0);
  useEffect(() => {
    (async () => {
      setAllProducts(await fetchProducts());
    })();
  }, []);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      const ad = items.map((a) => a.price);
      if (ad !== []) {
        setCartTotal(ad.reduce((e, f) => +e + +f, 0));
        setAsd(items.length);
      }
    }
  }, [asd]);
  if (isLogged()) return <Redirect to="/login" />;
  return (
    <>
      {/* <MenuTop /> */}
      <section className="cards-container">
        {renderCards(allProducts, asd, setAsd, itemQty)}
        <section className="checkout-container">
          <p data-testid="checkout-bottom-btn-value" className="checkout-value">
            {currencyFormat(cartTotal)}
          </p>
          <button
            type="button"
            className="checkout-btn"
            disabled={ asd === 0 }
            data-testid="checkout-bottom-btn"
            onClick={ () => route.push('/checkout') }
          >
            Ver Carrinho
          </button>
        </section>
      </section>
    </>
  );
}

export default Products;
