import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { allOrders } from '../actions';
import { getAllOrders } from '../api';
import { Header } from '../components';

class OrderDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      order: '',
    };
  }

  async componentDidMount() {
    const orders = await getAllOrders();
    this.separateDate(orders);
  }

  separateDate(array) {
    const { dispatchOrders, match: { params: { id } } } = this.props;
    for (let index = 0; index < array.length; index += 1) {
      const newDate = array[index].sale_date.split('T')[0].split('-');
      array[index].sale_date = `${newDate[2]}/${newDate[1]}`;
    }
    // caso dê problema nas orders
    dispatchOrders(array);
    //
    const { order } = this.state;
    if (order < 1) this.setState({ order: array[id - 1] });
  }

  render() {
    const { history, match: { params: { id } } } = this.props;
    const { order } = this.state;
    return (
      <div>
        <Header history={ history } />
        {order.length > 0 ? 
          <div
            className=""
            data-testid=""
          >
            <span>{order.id}</span>
            <span>{order.sale_date}</span>
            {/* quantidade */}
            {/* nome */}
            {/* valor total do produto */}
            {/* valor total da compra */}
            <span>{order.id}</span>
          </div>
          : null }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stateOrders: state.orders.orders,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchOrders: (array) => dispatch(allOrders(array)),
});

OrderDetails.propTypes = {
  stateOrders: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatchOrders: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
