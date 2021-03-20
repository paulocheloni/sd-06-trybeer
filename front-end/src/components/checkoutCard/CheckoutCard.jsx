import React from 'react';
import PropTypes from 'prop-types';

const deleteProduct = () => {
  
}

const CheckoutCard = ({qtd, name, price}) => (
  <div>
    <span>{qtd}</span>
    <span> - {name}</span>
    <span> {(price * qtd).toFixed(2)}</span>
    <button type="button" onClick={deleteProduct}>EXCLUIR</button>
  </div>
)

CheckoutCard.propTypes = {
  qtd: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
}

CheckoutCard.defaultProps = {
  qtd: 0,
  name: 'Produto Sem Nome',
  price: 'R$ 0,00',
}

export default CheckoutCard;
