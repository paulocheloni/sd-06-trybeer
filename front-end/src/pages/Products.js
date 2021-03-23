import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

import AppContext from '../context/app.context';
import productsApi from '../services/api.products';
import { Topbar, Loading } from '../components';

import '../styles/Products.css';

export default function Products() {
  const {
    productsContext: { products, setProducts },
    tokenContext: { token },
  } = useContext(AppContext);

  const [cart, setCart] = useState({});

  useEffect(() => {
    const magicTime = 1500;
    const fetchProducts = async () => {
      const productsArray = await productsApi(token);
      setTimeout(() => setProducts(productsArray), magicTime);
      // setProducts(productsArray);
    };
    fetchProducts();
  }, [setProducts, token]);

  const handleQuantity = (action, id) => {
    const currQuantity = cart[id] || 0;
    const newCart = { ...cart };
    if (action === 'add') newCart[id] = currQuantity + 1;
    if (action === 'sub' && currQuantity === 1) delete newCart[id];
    if (action === 'sub' && currQuantity > 1) newCart[id] -= 1;

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
                <section className="name" data-testid={ `${index}-product-img` }>
                  { name }
                </section>
                <section className="price" data-testid={ `${index}-product-price` }>
                  { `R$ ${price}` }
                </section>
                <section className="quantity">
                  <button
                    type="button"
                    onClick={ () => handleQuantity('sub', id) }
                    data-testid={ `${index}-product-minus` }
                  >
                    <FontAwesomeIcon icon={ faMinusCircle } className="quantity-icon" />
                  </button>
                  <span id={ `${index}-quant` } data-testid={ `${index}-product-qtd` }>
                    { cart[id] ? cart[id] : 0 }
                  </span>
                  <button
                    type="button"
                    onClick={ () => handleQuantity('add', id) }
                    data-testid={ `${index}-product-plus` }
                  >
                    <FontAwesomeIcon icon={ faPlusCircle } className="quantity-icon" />
                  </button>
                </section>
              </section>
            )) }
          </section>
        ) }
    </section>
  );
}
