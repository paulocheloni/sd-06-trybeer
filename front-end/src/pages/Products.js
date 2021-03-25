import React, { useContext, useMemo } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

import AppContext from '../context/app.context';
import { Topbar, Loading, CartButton } from '../components';
import { handleProductQuantity } from '../utils';

import '../styles/Products.css';

export default function Products() {
  const {
    productsContext: { products },
    tokenContext: { token },
    cartContext: { cart, setCart },
  } = useContext(AppContext);

  const history = useHistory();

  const updateQuantity = (action, id, data = {}) => {
    const newCart = handleProductQuantity({
      action,
      id,
      data,
      cart });
    setCart(newCart);
  };

  const goCheckout = () => history.push('/checkout');

  const disabled = useMemo(() => (Object.keys(cart).length === 0), [cart]);

  if (!token) return <Redirect to="/login" />;

  return (
    <section>
      <Topbar />
      { (!products)
        ? <Loading />
        : (
          <>
            <section className="products-container">
              { (products.length === 0)
                ? 'Não há produtos no banco de dados.'
                : products.map(({ id, url_image: urlImage, price, name }, index) => (
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
                        <FontAwesomeIcon
                          icon={ faMinusCircle }
                          className="quantity-icon"
                        />
                      </button>
                      <span data-testid={ `${index}-product-qtd` }>
                        { cart[id] ? cart[id].quantity : 0 }
                      </span>
                      <button
                        type="button"
                        onClick={ () => updateQuantity('add', id, { name, price }) }
                        data-testid={ `${index}-product-plus` }
                      >
                        <FontAwesomeIcon
                          icon={ faPlusCircle }
                          className="quantity-icon"
                        />
                      </button>
                    </section>
                  </section>
                )) }
            </section>
            <CartButton
              cart={ cart }
              id="cart"
              callback={ goCheckout }
              disabled={ disabled }
            />
          </>
        ) }
    </section>
  );
}
