import React, { useState, useEffect } from 'react';
import Button from '../Button';
import GetProducts from '../../services/GetProducts';
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
  useEffect(() => GetProducts(setProducts), []);

  return (
    <div>
      {products.length < 1 ? <div>Loading...</div> : products.map((item, index) => (
        <div key={ index }>
          <span data-testid={ `${index}-product-price` }>
            {item.price}
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
              onClick={ () => console.log('somando') }
            >
              +
            </Button>
            <Button
              dataTestId={ `${index}-product-minus` }
              onClick={ () => console.log('subtraindo') }
            >
              -
            </Button>
          </S.Buttons>
          { buttonSeeCar }
          <span data-testid="checkout-bottom-btn-value">
            Valor total:
          </span>
          <span data-testid={ `${index}-product-qtd` }>
            Quantidade:
          </span>
        </div>
      ))}
    </div>
  );
};

export default CardProduct;
