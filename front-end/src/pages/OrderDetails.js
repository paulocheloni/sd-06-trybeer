import React from 'react';
import PropTypes from 'prop-types';
import TopMenu from '../components/TopMenu';

function OrderDetails(props) {
  const { match: { params } } = props;
  const { id } = params;

  console.log(id);
  return (
    <div>
      <TopMenu />
      {`OrderDetails - Pedido - ${id}!`}
    </div>
  );
}

OrderDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default OrderDetails;
