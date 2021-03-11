import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Header } from '../components';

class Products extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { history } = this.props;
    return (
      <div>
        <Header history={ history } />
        <p>Products</p>
      </div>
    );
  }
}

Products.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default connect(null, null)(Products);
