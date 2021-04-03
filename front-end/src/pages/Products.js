import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { getProducts } from '../api/axiosApi';
import Navbar from '../components/Navbar';

export default function Products() {
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const execute = async () => {
    const productsStored = localStorage.getItem('products');

    if (productsStored) {
      setProducts(JSON.parse(productsStored));
    } else {
      let productsDB = await getProducts();
      productsDB = productsDB.map((product) => { return { ...product, quantity: 0 }; });
      setProducts(productsDB);
      localStorage.setItem('products', JSON.stringify(productsDB));
    }
  };

  useEffect(() => {
    const localStorageProfile = JSON.parse(localStorage.getItem('user'));
    if (localStorageProfile === null) {
      history.push('./login');
    }
    execute();
  }, []);

  const handleClickMinus = (product) => {
    product.quantity = product.quantity > 0 ? product.quantity - 1 : 0;
    const cloneProducts = [...products];
    setProducts(cloneProducts);
    localStorage.setItem('products', JSON.stringify(cloneProducts));
  };

  const handleClickPlus = (product) => {
    product.quantity += 1;
    const cloneProducts = [...products];
    setProducts(cloneProducts);
    localStorage.setItem('products', JSON.stringify(cloneProducts));
  };

  const updateTotalPrice = () => {
    let updatePrice = 0;
    products.forEach((product) => {
      updatePrice += product.price * product.quantity;
    });
    setTotalPrice(updatePrice);
  };

  useEffect(() => {
    updateTotalPrice();
  }, [products]);

  return (
    <div>
      <Navbar />
      <button
        type="button"
        id="viewCart"
        className="viewCart"
        data-testid="checkout-bottom-btn"
        disabled={ totalPrice === 0 }
        onClick={ () => history.push('./checkout') }
      >
        Ver Carrinho
      </button>
      <strong data-testid="checkout-bottom-btn-value">
        { `R$ ${totalPrice.toFixed(2).replace('.', ',')}` }
      </strong>
      <ul>
        {products && products.map((product, index) => {
          return (
            <div key={ product.id }>
              <img
                alt="url_image"
                data-testid={ `${index}-product-img` }
                src={ product.url_image }
                style={ { maxHeight: '100px' } }
              />
              <p data-testid={ `${index}-product-name` }>
                { product.name }
              </p>
              <p data-testid={ `${index}-product-price` }>
                { `R$ ${product.price.replace('.', ',')}` }
              </p>
              <button
                type="button"
                id="minusId"
                className="minusClassName"
                data-testid={ `${index}-product-minus` }
                onClick={ () => handleClickMinus(product) }
              >
                -
              </button>
              <span data-testid={ `${index}-product-qtd` }>
                { product.quantity }
              </span>
              <button
                type="button"
                id="plusId"
                className="plusClassName"
                data-testid={ `${index}-product-plus` }
                onClick={ () => handleClickPlus(product) }
              >
                +
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
