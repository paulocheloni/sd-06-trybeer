import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Button from '../Button';
import mokProduct from '../../Mocks/mocksProduct';

const CardProduct = () => {
  const { products, setProducts } = useContext(AppContext);
  useEffect(() => setProducts(mokProduct), []);
  return (
    <div>
      {products.map((item, index) => (
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
          <Button
            data-testid="checkout-bottom-btn"
            onClick={ () => console.log('ver carrinho') }
          >
            Ver Carrinho
          </Button>
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
