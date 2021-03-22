import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { Header } from '../components';
import SideBarAdmin from '../components/SideBarAdmin';
// import './AdminOrders.css';

class AdminOrders extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { history, stateCart } = this.props;
    console.log(stateCart)
    return (
      <div>
        {/* <Header history={ history } /> */}
        <SideBarAdmin history={ history } />
        { console.log(this.state) }
        <h1>Olá</h1>
        { stateCart.map((el, index) => (
          <Link key={ el.orderNumber } to={ `/orders/:${el.orderNumber}` }>
            <div key={ el.orderNumber } className="cart-item" product>
              <h4 data-testid={ `${index}-order-number` }>
                {' '}
                { el.orderNumber }
                {' '}
              </h4>
              <p data-testid={ `${index}-order-address` }>
                {' '}
                { el.deliveryOrder }
                {' '}
              </p>
              <h4 data-testid={ `${index}-product-price` }>
                {' '}
                { el.price }
                {' '}
              </h4>
              <p data-testid={ `${index}-order-status` }>
                {' '}
                { el.statusOrder }
                {' '}
              </p>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

AdminOrders.propTypes = {
  history: PropTypes.shape().isRequired,
};

const mapStateToProps = (state) => ({
  stateCart: state.products.cartList,
});


export default connect(mapStateToProps, null)(AdminOrders);
