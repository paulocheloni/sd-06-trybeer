import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Header } from '../components';

class AdminOrders extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { history } = this.props;
    return (
      <div>
        <Header history={ history } />
        <p>Orders</p>
      </div>
    );
  }
}

AdminOrders.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default connect(null, null)(AdminOrders);
