import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import PageMenu from '../../../design-system/page-menu/PageMenu';
import Buttons from '../components/Buttons';
import GlobalContext from '../../../context/Context';
import api from '../../../axios';
import PaperContainer from '../../../design-system/containers/PaperContainer';
import BodyContainer from '../../../design-system/containers/BodyContainer';

function Products() {
  const [prod, setProd] = useState('');
  const [rendering, setRendering] = useState(false);

  const {
    cartItems,
    setCartItems,
    setMenuStatus,
  } = useContext(GlobalContext);

  const totalPrice = cartItems.reduce((acc, curr) => {
    const result = (acc + curr.quantity * curr.price);
    return result;
  }, 0);

  const handleCartStorage = () => {
    const currentCart = JSON.parse(localStorage.getItem('cart'));

    if (!currentCart) localStorage.setItem('cart', JSON.stringify(cartItems));

    if (currentCart) {
      if (cartItems.length === 0) {
        setCartItems(currentCart);
        localStorage.setItem('cart', JSON.stringify(currentCart));
      }
      if (cartItems.length > 0) {
        localStorage.removeItem('cart');
        localStorage.setItem('cart', JSON.stringify(cartItems));
      }
    }
  };

  useEffect(() => {
    api.get('/products').then((resp) => setProd(resp.data));
    setMenuStatus(false);
  }, []);

  useEffect(() => {
    if (Array.isArray(prod)) {
      setRendering(true);
    }
  }, [prod]);

  // useEffect(() => {
  //   handleCartStorage();
  // }, [cartItems]);

  const renderProducts = () => (
    <div className="flex flex-wrap">
      { prod.map((p, index) => (
        <div
          key={ index }
          className="flex flex-col w-1/4 border items-center justify-items-center m-1"
        >
          <img
            className="w-20"
            data-testid={ `${index}-product-img` }
            src={ p.url_image }
            alt={ p.name }
          />

          <p data-testid={ `${index}-product-name` }>
            {p.name}
          </p>

          <p data-testid={ `${index}-product-price` }>
            {`R$ ${p.price.replace('.', ',')}`}
          </p>

          <Buttons
            index={ index }
            prod={ { price: p.price, img: p.url_image, name: p.name, id: p.id } }
          />
        </div>
      ))}
    </div>
  );

  return (
    <BodyContainer>
      <PaperContainer>
        <PageMenu pageName="Pedidos" />
        {rendering ? renderProducts() : <span>Waiting data</span>}
        <Link
          className="flex items-center w-full space-x-2 bg-secondary rounded-md p-2 justify-center"
          to="/checkout"
          data-testid="checkout-bottom-btn"
        >
          <p>Ver Carrinho</p>
          <p data-testid="checkout-bottom-btn-value">
            { `R$ ${totalPrice.toFixed(2).replace('.', ',')}` }
          </p>
        </Link>
      </PaperContainer>
    </BodyContainer>
  );
}

export default Products;
