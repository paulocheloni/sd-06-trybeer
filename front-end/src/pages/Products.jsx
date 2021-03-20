import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import fetchProducts from '../methods/products';
import renderCards from '../components/RenderCards';
import isLogged from '../components/isLogged';
import MenuTop from '../components/MenuTop';
import currencyFormat from '../utils/currencyFormat';
import './Products.css';

const itemQty = (prod) => {
  const items = JSON.parse(localStorage.getItem('items'));
  if (items) {
    const qty = items.filter((e) => e.id === prod.id);
    return qty.length;
  }
  return 0;
};

const timeOut = 3000;

function Products() {
  const [allProducts, setAllProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [reload, setReload] = useState(0);
  const [onSuccess, setOnSuccess] = useState(false);

  useEffect(() => {
    (async () => setAllProducts(await fetchProducts()))();
  }, []);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    const success = JSON.parse(localStorage.getItem('success'));
    if (success) {
      setTimeout(() => {
        localStorage.removeItem('success');
        localStorage.setItem('items', JSON.stringify([]));
        setReload(reload);
      }, timeOut);
    }
    setOnSuccess(success);
    if (items) {
      const ad = items.map((a) => a.price);
      if (ad !== []) {
        setCartTotal(ad.reduce((e, f) => +e + +f, 0));
        setReload(items.length);
      }
    }
  }, [reload]);
  if (isLogged()) return <Redirect to="/login" />;
  return (
    <>
      <MenuTop title="TryBeer" />
      {onSuccess ? <p>Compra realizada com sucesso!</p> : null}
      <section className="cards-container">
        {renderCards(allProducts, reload, setReload, itemQty)}
        <Link to="/checkout" className="cart-link">
          <button
            type="button"
            className="cart-btn"
            disabled={ reload === 0 }
            data-testid="checkout-bottom-btn"
          >
            <p data-testid="checkout-bottom-btn-value">
              Ver Carrinho
              {' '}
              {currencyFormat(cartTotal)}
            </p>
          </button>
        </Link>
      </section>
    </>
  );
}

export default Products;
