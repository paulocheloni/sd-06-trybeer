import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Buttons from '../components/Buttons';
import GlobalContext from '../../../context/Context';
import api from '../../../axios';
import PaperContainer from '../../../design-system/containers/PaperContainer';

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
    <div className="grid md:grid-cols-4 gap-8 align-baseline">
      { prod.map((p, index) => (
        <div
          key={ index }
          className="border rounded-md border-primary p-2 flex flex-col items-center"
        >
          <div className="w-50 h-50 border-gray-200 border p-2">
            <img
              data-testid={ `${index}-product-img` }
              src={ p.url_image }
              className="round-md object-contain
                w-80 h-80 md:w-48 md:h-48 md:object-scale-down"
              alt={ p.name }
            />
          </div>
          <div className="flex flex-col">
            <p data-testid={ `${index}-product-price` }>
              <strong>{ `R$ ${p.price.replace('.', ',')}` }</strong>
            </p>
            <p data-testid={ `${index}-product-name` }>
              {p.name}
            </p>
            <Buttons
              index={ index }
              prod={ { price: p.price, img: p.url_image, name: p.name, id: p.id } }
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <PaperContainer>
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
  );
}

export default Products;
