import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { GlobalContext } from '../../Contexts/GlobalContext';

import S from './styles';

const handleCounter = (
  { value }, { quantity, setQuantity, stateSumPrice, setStateSumPrice, price },
) => {
  if (value === 'plus') {
    setQuantity(quantity + 1);
    setStateSumPrice(stateSumPrice + Number(price));
  }
  if (value === 'minus' && quantity > 0) {
    setQuantity(quantity - 1);
    setStateSumPrice(stateSumPrice - Number(price));
  }
};

const CardProducts = ({ product }) => {
  const { id, price, name } = product;

  const { stateSumPrice, setStateSumPrice } = useContext(GlobalContext);

  const [quantity, setQuantity] = useState(0);

  // console.log(stateSumPrice);

  const stateProps = {
    quantity,
    setQuantity,
    stateSumPrice,
    setStateSumPrice,
    price,
  };

  return (
    <S.Container>
      <S.Price>
        <span data-testid={ `${id}-product-price` }>
          {`R$ ${price}`}
        </span>
      </S.Price>

      <S.Image>
        <img
          data-testid={ `${id}-product-img` }
          src="/images/image-heineken.png"
          alt={ name }
        />
      </S.Image>

      <S.Description>
        <span data-testid={ `${id}-product-name` }>
          {name}
        </span>
      </S.Description>

      <S.Counter>
        <button
          type="button"
          value="minus"
          onClick={ ({ target }) => handleCounter(target, stateProps) }
          data-testid={ `${id}-product-minus` }
        >
          -
        </button>
        <div data-testid={ `${id}-product-qtd` }>
          {quantity}
        </div>
        <button
          type="button"
          value="plus"
          onClick={ ({ target }) => handleCounter(target, stateProps) }
          data-testid={ `${id}-product-plus` }
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