import React, { useEffect, useState } from 'react';
import GetProducts from '../../services/GetProducts';
import Button from '../Button';
import * as S from './style';

const buttonSeeCar = (
  <div>
    <S.Buttons>
      <Button
        dataTestId="checkout-bottom-btn"
        onClick={ () => console.log('ver carrinho') }
      >
        Ver Carrinho
      </Button>
    </S.Buttons>
  </div>
);

const CardProduct = () => {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (localStorage.products && JSON.parse(localStorage.products) !== []) {
      return setProducts(JSON.parse(localStorage.products))
    }
    return GetProducts(setProducts);
  }, []);

  useEffect(() => {
    localStorage.products = JSON.stringify(products)
  }, [products]);

  
  return (
    <div>
      {products.length < 1 ? <div>Loading...</div> : products.map((item, index) => (
        <div key={ index }>
          <span data-testid={ `${index}-product-price` }>
            R$ {item.price.replace(/\./g, ',')}
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
                const it = products.map(el => {
                  if (el.id === index + 1) {
                    
                    return {...el, productQuantity: el.productQuantity + 1}
                  }
                  return el
                })
                setProducts(it)
              } }
            >
              +
            </Button>
            <Button
              dataTestId={ `${index}-product-minus` }
              onClick={ () => {
                const it = products.map(el => {
                  if (el.id === index + 1 && el.productQuantity > 0) {
                    return {...el, productQuantity: el.productQuantity - 1}
                  }
                  return el
                })
                setProducts(it)
              } }
            >
              -
            </Button>
          </S.Buttons>
          { buttonSeeCar }
          Valor total: 
          <span data-testid="checkout-bottom-btn-value">
            R$ { (item.price * item.productQuantity).toFixed(2).replace(/\./g, ',') }
          </span>
          <br></br>
          <span data-testid={ `${index}-product-qtd` }>
            { item.productQuantity }
          </span>
        </div>
      ))}
    </div>
  );
};

export default CardProduct;
