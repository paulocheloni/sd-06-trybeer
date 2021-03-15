import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchProducts from '../methods/products';
import renderCards from '../components/RenderCards';
import './Products.css';

function Products() {
  const [allProducts, setAllProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [asd, setAsd] = useState(0);

  const itemQty = (prod) => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      const qty = items.filter((e) => e.id === prod.id).length;
      return qty;
    }
    setAsd(0);
    return 0;
  };
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
  return (
    <>
      <h1 style={ { marginLeft: '40px' } }>Products</h1>
      <section className="cards-container">
        {renderCards(allProducts, asd, setAsd, itemQty)}
        <Link to="/cart" className="cart-link" data-testid="checkout-bottom-btn">
          <button
            data-testid="checkout-bottom-btn-value"
            type="button"
            className="cart-btn"
            disabled={ asd === 0 }
          >
            Ver Carrinho
            {' '}
            {cartTotal.toFixed(2).toLocaleString()}
          </button>
        </Link>
      </section>
    </>
  );
}

export default Products;
