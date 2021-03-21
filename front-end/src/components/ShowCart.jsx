import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ShowCart(props) {
  const { total } = props;

  return (
    <div>
      <Link to="/orders/:id">
        <button
          data-testid="checkout-bottom-btn-value"
          type="button"
        >
          Ver carrinho R$
          { total && ` ${total.toString().replace('.', ',')}` }
        </button>
      </Link>
    </div>
  );
}

ShowCart.propTypes = {
  total: PropTypes.number.isRequired,
};

// export default ShowCart;
