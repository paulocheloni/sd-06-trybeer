import React, { useReducer } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const products = [
  {
    id: 1,
    name: 'Skol Lata 250ml',
    price: 2.20,
    image: 'http://localhost:3001/images/Skol Lata 350ml.jpg',
  },
  {
    id: 2,
    name: 'Heineken 600ml',
    price: 7.50,
    image: 'http://localhost:3001/images/Heineken 600ml.jpg',
  },
  {
    id: 3,
    name: 'Antarctica Pilsen 300ml',
    price: 2.49,
    image: 'http://localhost:3001/images/Antarctica Pilsen 300ml.jpg',
  },
];

const initialState = { quantity: 0 };

const reducer = (state, action) => {
  switch (action.type) {
  case 'increase':
    return { quantity: state.quantity + 1 };
  case 'decrease':
    return { quantity: state.quantity - 1 };
  default:
    throw new Error();
  }
};

const ProductsList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return products.map((product, index) => (
    <div
      key={ index }
    >
      <img
        alt={ `Cerveja ${product.name}` }
        data-testid={ `${index}-product-img` }
        src={ product.image }
      />
      <span
        data-testid={ `${index}-product-price` }
      >
        { `R$ ${product.price.toFixed(2).replace('.', ',')}` }
      </span>
      <span
        data-testid={ `${index}-product-name` }
      >
        { product.name }
      </span>
      <button
        type="button"
        name={ product.name }
        data-testid={ `${index}-product-plus` }
        onClick={ () => dispatch({ type: 'increase', product }) }
      >
        <FiPlus />
      </button>
      <span
        data-testid={ `${index}-product-qtd` }
      >
        { (state.quantity >= 0) ? state.quantity : 0 }
      </span>
      <button
        type="button"
        data-testid={ `${index}-product-minus` }
        onClick={ () => dispatch({ type: 'decrease' }) }
      >
        <FiMinus />
      </button>
    </div>
  ));
};

export default ProductsList;
