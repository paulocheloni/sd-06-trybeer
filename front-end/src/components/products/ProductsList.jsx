import React, { useReducer, useState } from 'react';
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
  // const [quantity, setQuantity] = useState([]);
  const [count, setCount] = useState(1);

  localStorage.cartItems = JSON.stringify([]);
  const handleQuantity = (product) => {
    const storageItems = JSON.parse(localStorage.cartItems);
    console.log(storageItems);
    if (storageItems.length === 0) {
      // const teste = JSON.stringify(({ ...product, amount: count }));
      // storageItems.push('teste');
      localStorage.cartItems = JSON.stringify(({ ...product, amount: count }));
    } else {
      console.log(storageItems);
      // const value = product.amount;
      // const amount = 'amount';
      // getProduct[amount] = value + 1;
      // // array[0] = {};
      // setQuantity(quantity.concat(getProduct));
    }

    // const teste = products.find((item) => item.name === product.name);

    // const getProduct = quantity.find((item) => item.name === product.name);

    // if (!teste) {
    //   setQuantity(quantity.concat({ ...product, amount: count }));
    // } else {
    //   const amount = 'amount';
    //   // setCount(count + 1);
    //   teste[amount] = count;
    //   setQuantity(quantity.concat(teste));
    // }
    // const findInd = quantity.findIndex((el) => el.name === product.name);
    // console.log(findInd);
  };
  // console.log(quantity);

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
        // onClick={ () => dispatch({ type: 'decrease' }) }
        onClick={ () => handleQuantity(product) }
      >
        <FiMinus />
      </button>
    </div>
  ));
};

export default ProductsList;
