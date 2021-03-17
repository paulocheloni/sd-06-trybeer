import React from 'react';
import PropTypes from 'prop-types';

export default function DrinkCard({ cardPayload, index }) {
  const { photo, name, price, quantity } = cardPayload;
  const testIds = {
    priceId: `${index}-product-price`,
    imgId: `${index}-product-img`,
    nameId: `${index}-product-name`,
    plusId: `${index}-product-plus`,
    minusId: `${index}-product-minus`,
    qtdId: `${index}-product-qtd`,
  };

  const { priceId, imgId, nameId, plusId, minusId, qtdId } = testIds;

  return (
    <div>
      <p className="price-tag" data-testid={ priceId }>{price}</p>
      <img data-testid={ imgId } alt={ `${name} product card` } src={ photo } />
      <p className="name-tag" data-testid={ nameId }>{name}</p>
      <div>
        <button type="button" className="plus-button" data-testid={ plusId }>+</button>
        <div data-testid={ qtdId }>{quantity}</div>
        <button type="button" className="minus-button" data-testid={ minusId }>-</button>
      </div>
    </div>
  );
}

DrinkCard.propTypes = {
  cardPayload: PropTypes.shapeOf({
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
