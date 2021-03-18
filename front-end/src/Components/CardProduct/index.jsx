/* eslint-disable react/no-multi-comp */
/* eslint-disable max-lines-per-function */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import GetProducts from '../../services/GetProducts';
import Button from '../Button';
import * as S from './style';

// const ButtonSeeCart = (disabled, onClick, dataTestId) => {
//   return (
//     <div>
//       <S.Buttons>
//         <Button
//           dataTestId={ dataTestId }
//           onClick={ onClick }
//           disabled={ disabled }
//         >
//           Ver Carrinho
//         </Button>
//       </S.Buttons>
//     </div>
//   );
// };

const CardProduct = () => {
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const [cartDisabled, SetCartDisabled] = useState([true]);
  // useEffect(() => {
  //   const retrievedToken = (localStorage.getItem('token'));
  //   if (!retrievedToken) history.push('/login');
  // }, [history]);
  useEffect(() => {
    const retrievedProducts = (localStorage.getItem('products'));
    if (retrievedProducts && JSON.parse(retrievedProducts) !== []) {
      return setProducts(JSON.parse(retrievedProducts));
    }
    return GetProducts(setProducts);
  }, []);

  useEffect(() => {
    localStorage.products = JSON.stringify(products);
    const productsAmount = products.reduce((acc, product) => acc + product
      .productQuantity, 0);
    if (productsAmount > 0) {
      SetCartDisabled(false);
    } else {
      SetCartDisabled(true);
    }
  }, [products]);

  return (
    <div>
      {products.length < 1 ? <div>Loading...</div> : products.map((item, index) => (
        <div key={ index }>
          <span data-testid={ `${index}-product-price` }>
            R$
            {' '}
            {item.price.replace(/\./g, ',')}
          </span>
          <img
            data-testid={ `${index}-product-img` }
            src={ item.url_image }
            alt="beer"
          />
          <span data-testid={ `${index}-product-name` }>
            {item.name}
          </span>
          <S.Buttons>
            <Button
              dataTestId={ `${index}-product-plus` }
              onClick={ () => {
                const it = products.map((el) => {
                  if (el.id === index + 1) {
                    return { ...el, productQuantity: el.productQuantity + 1 };
                  }
                  return el;
                });
                setProducts(it);
              } }
            >
              +
            </Button>
            <Button
              dataTestId={ `${index}-product-minus` }
              onClick={ () => {
                const it = products.map((el) => {
                  if (el.id === index + 1 && el.productQuantity > 0) {
                    return { ...el, productQuantity: el.productQuantity - 1 };
                  }
                  return el;
                });
                setProducts(it);
              } }
            >
              -
            </Button>
          </S.Buttons>
          Valor total:
          <span data-testid="checkout-bottom-btn-value">
            R$
            {' '}
            { (item.price * item.productQuantity).toFixed(2).replace(/\./g, ',') }
          </span>
          <br />
          <span data-testid={ `${index}-product-qtd` }>
            { item.productQuantity }
          </span>
        </div>
      ))}
      <S.Buttons>
        <Button
          dataTestId="checkout-bottom-btn"
          onClick={ () => history.push('/checkout') }
          disabled={ cartDisabled }
        >
          Ver Carrinho
        </Button>
      </S.Buttons>
    </div>
  );
};

export default CardProduct;
