import React, { useEffect, useContext } from 'react';
import GetProducts from '../../services/GetProducts';
import axios from 'axios';
import Button from '../Button';
import AppContext from '../../context/AppContext';

const buttonSeeCar = (
  <div>
    <Button
      data-testid="checkout-bottom-btn"
      onClick={ () => console.log('ver carrinho') }
    >
      Ver Carrinho
    </Button>
  </div>
);

const CardProduct = () => {

  const { products, setProducts } = useContext(AppContext);
  useEffect(async () => {
    const response = await axios.get('http://localhost:3001/products');
    console.log('resposta axius:', response);
    return setProducts(response.data);
  }, []);

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
          <Button
            data-testid={ `${index}-product-plus` }
            onClick={ () => console.log('somando') }
          >
            +
          </Button>
          <Button
            data-testid={ `${index}-product-minus` }
            onClick={ () => console.log('subtraindo') }
          >
            -
          </Button>
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
