import React from 'react';
import PropTypes from 'prop-types';
function TotalCheckout(props) {
  const { total } = props;
  return (
    <div>
      <p data-testid="order-total-value">
        Total: R$
        { total.replace('.', ',') }
      </p>
    </div>
  );
}

TotalCheckout.propTypes = {
  total: PropTypes.shapeOf(PropTypes.object).isRequired,
};

export default TotalCheckout;
