import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

import AppContext from '../context/app.context';
import productsApi from '../services/api.products';
import { Topbar, Loading, CartButton } from '../components';
import { handleProductQuantity } from '../utils';
import useStorage from '../hooks/useStorage';

import '../styles/Products.css';

export default function Products() {
  const {
    productsContext: { products, setProducts },
    tokenContext: { token },
  } = useContext(AppContext);

  const updateCartStorage = useStorage('cart');

  const localCart = JSON.parse(localStorage.getItem('cart')) || {};

  const [cart, setCart] = useState(localCart);

  useEffect(() => {
    const magicTime = 1500;
    const fetchProducts = async () => {
      const productsArray = await productsApi(token);
      setTimeout(() => setProducts(productsArray), magicTime);
      // setProducts(productsArray);
    };
    fetchProducts();
  }, [setProducts, token]);

  useEffect(() => {
    updateCartStorage(cart);
  }, [cart, updateCartStorage]);

  const updateQuantity = (action, id, price = 0) => {
    const newCart = handleProductQuantity({
      action,
      id,
      price,
      cart });
    setCart(newCart);
  };

  if (!token) return <Redirect to="/login" />;

  return (
    <section>
      <Topbar />
      { (products.length === 0)
        ? <Loading />
        : (
          <section className="products-container">
            { products.map(({ id, url_image: urlImage, price, name }, index) => (
              <section className="product-card" key={ `${index}-${name}` }>
                <img
                  src={ urlImage }
                  data-testid={ `${index}-product-img` }
                  alt="Img do produto."
                />
                <section className="name" data-testid={ `${index}-product-name` }>
                  { name }
                </section>
                <section className="price" data-testid={ `${index}-product-price` }>
                  { `R$ ${price.replace('.', ',')}` }
                </section>
                <section className="quantity">
                  <button
                    type="button"
                    onClick={ () => updateQuantity('sub', id) }
                    data-testid={ `${index}-product-minus` }
                  >
                    <FontAwesomeIcon icon={ faMinusCircle } className="quantity-icon" />
                  </button>
                  <span id={ `${index}-quant` } data-testid={ `${index}-product-qtd` }>
                    { cart[id] ? cart[id].quantity : 0 }
                  </span>
                  <button
                    type="button"
                    onClick={ () => updateQuantity('add', id, price) }
                    data-testid={ `${index}-product-plus` }
                  >
                    <FontAwesomeIcon icon={ faPlusCircle } className="quantity-icon" />
                  </button>
                </section>
              </section>
            )) }
          </section>
        ) }
      <CartButton cart={ cart } />
    </section>
  );
}
