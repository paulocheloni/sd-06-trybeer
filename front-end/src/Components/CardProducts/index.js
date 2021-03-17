import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { GlobalContext } from '../../Contexts/GlobalContext';

import S from './styles';

const handleCounter = (
  { value }, {
    quantity,
    setQuantity,
    stateSumPrice,
    setStateSumPrice,
    price,
    id,
    cartList,
    setCartList,
  },
  ) => {
  if (value === 'plus') {
    setQuantity(quantity + 1);
    setStateSumPrice(stateSumPrice + Number(price));
    setCartList(() => (if )[...cartList, { id, price, quantiy: quantity + 1 }]);
    localStorage.setItem('total', JSON.stringify(stateSumPrice + Number(price)));
  }
  if (value === 'minus' && quantity > 0) {
    setQuantity(quantity - 1);
    setStateSumPrice(stateSumPrice - Number(price));
    setCartList([...cartList, { id, price, quantity: quantity - 1 }]);
    localStorage.setItem('total', JSON.stringify(stateSumPrice - Number(price)));
  }
};

const CardProducts = ({ product }) => {
  const { id, price, name } = product;

  const { stateSumPrice, setStateSumPrice, cartList, setCartList } = useContext(GlobalContext);

  const [quantity, setQuantity] = useState(0);

  const stateProps = {
    quantity,
    setQuantity,
    stateSumPrice,
    setStateSumPrice,
    price,
    id,
    cartList,
    setCartList,
  };

  return (
    <S.Container id={`${id - 1}-product-container`}>
      <S.Price>
        <span data-testid={ `${id - 1}-product-price` }>
          {`R$ ${price.replace('.', ',')}`}
        </span>
      </S.Price>

      <S.Image>
        <img
          data-testid={ `${id - 1}-product-img` }
          src="/images/image-heineken.png"
          alt={ name }
        />
      </S.Image>

      <S.Description>
        <span data-testid={ `${id - 1}-product-name` }>
          {name}
        </span>
      </S.Description>

      <S.Counter>
        <button
          type="button"
          value="minus"
          onClick={ ({ target }) => handleCounter(target, stateProps) }
          data-testid={ `${id - 1}-product-minus` }
        >
          -
        </button>
        <div data-testid={ `${id - 1}-product-qtd` }>
          {quantity}
        </div>
        <button
          type="button"
          value="plus"
          onClick={ ({ target }) => handleCounter(target, stateProps) }
          data-testid={ `${id - 1}-product-plus` }
        >
          +
        </button>
      </S.Counter>
    </S.Container>
  );
};

CardProducts.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    url_image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardProducts;
