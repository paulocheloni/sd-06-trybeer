import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from '../../../context/Context';

const Buttons = ({ index, prod }) => {
  const {
    cartItems,
    setCartItems,
  } = useContext(GlobalContext);

  const handleClick = (type) => {
    const subtractValue = -1;
    const increment = type === 'add' ? 1 : subtractValue;

    const position = cartItems.reduce((acc, item, idx) => {
      if (item.id === prod.id) return idx;
      return acc;
    }, subtractValue);

    if (position === subtractValue && type === 'add') {
      return setCartItems((prev) => (
        [
          ...prev,
          { id: prod.id, quantity: 1, price: prod.price, name: prod.name },
        ]
      ));
    }

    if (position === subtractValue && type === 'sub') {
      return setCartItems((prev) => (
        [
          ...prev,
        ]
      ));
    }

    if (cartItems[position].quantity === 1 && type === 'sub') {
      return setCartItems((prev) => (
        [
          ...prev.slice(0, position),
          ...prev.slice(position + 1),
        ]
      ));
    }

    return setCartItems((prev) => (
      [
        ...prev.slice(0, position),
        {
          ...prev[position], quantity: prev[position].quantity + increment,
        },
        ...prev.slice(position + 1),
      ]
    ));
  };

  const getQuantityById = () => {
    const subtractValue = -1;
    let quantity = 0;

    const position = cartItems.reduce((acc, item, idx) => {
      if (item.id === prod.id) return idx;
      return acc;
    }, subtractValue);

    if (position === subtractValue) {
      return quantity;
    }

    quantity = cartItems[position].quantity;
    return quantity;
  };

  return (
    <div className="flex items-center space-x-1">
      <button
        data-testid={ `${index}-product-minus` }
        className="bg-gray-200 mr-2 w-6 h-6 flex items-center justify-center rounded-full"
        type="button"
        name="-"
        onClick={ () => handleClick('sub') }
      >
        -
      </button>

      <p data-testid={ `${index}-product-qtd` } className="mr-2">
        { getQuantityById() }
      </p>

      <button
        data-testid={ `${index}-product-plus` }
        className="bg-gray-200 mr-2 w-6 h-6 flex items-center justify-center rounded-full"
        type="button"
        name="+"
        onClick={ () => handleClick('add') }
      >
        +
      </button>
    </div>
  );
};

Buttons.propTypes = {
  index: PropTypes.number.isRequired,
  prod: PropTypes.shape({
    price: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Buttons;
