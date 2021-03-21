import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ShowCart(props) {
  const { total } = props;

  return (
    <div>
      <Link to="/orders/:id">
        <button
          data-testid="checkout-bottom-btn"
          type="button"
        >
          Ver Carrinho
          <span data-testid="checkout-bottom-btn-value">
            {
              total
                ? ` R$ ${total.toString().replace('.', ',')}`
                : 'R$ 0,00'
            }


            {/* { total && `R$ ${total.toString().replace('.', ',')}` } */}
          </span>
        </button>
      </Link>
    </div>
  );
}

ShowCart.propTypes = {
  total: PropTypes.number.isRequired,
};

// export default ShowCart;
