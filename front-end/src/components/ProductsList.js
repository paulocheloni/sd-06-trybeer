import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { cartList, prodList } from '../actions';
import { getProducts } from '../api';

class ProductsList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    const { dispatchProducts } = this.props;
    const products = await getProducts();
    dispatchProducts(products);
  }

  render() {
    const { stateProducts } = this.props;
    return (
      <div className="prodlist-container">
        { stateProducts
          && stateProducts.map((product) => (
            <div className="" key={ product.id }>
              <img src={ product.url_image } alt={ product.name } />
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stateProducts: state.products.products,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchProducts: (array) => dispatch(prodList(array)),
  dispatchCart: (array) => dispatch(cartList(array)),
});

ProductsList.propTypes = {
  dispatchProducts: PropTypes.func.isRequired,
  stateProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
