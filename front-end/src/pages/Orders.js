import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { allOrders } from '../actions';
import { getAllOrders } from '../api';
import { Header } from '../components';

class Orders extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    this.separateDate(await getAllOrders());
  }

  separateDate(array) {
    const { dispatchOrders } = this.props;
    for (let index = 0; index < array.length; index += 1) {
      const newDate = array[index].sale_date.split('T')[0].replaceAll('-', '/');
      array[index].sale_date = newDate;
    }
    dispatchOrders(array);
  }

  render() {
    const { history, stateOrders } = this.props;
    return (
      <div>
        <Header history={ history } />
        <div className="orders-container">
          {stateOrders.length > 0 && stateOrders.map((element, index) => (
            <div className="order" key={ index } data-testid="0-order-card-container">
              <div>
                <h4 data-testid={ `${index}-order-number` }>
                  {`Pedido ${index + 1}`}
                </h4>
                <h5 data-testid={ `${index}-order-date` }>
                  {element.sale_date.split('2021/')[1]}
                </h5>
              </div>
              <p data-testid={ `${index}-order-total-value` }>
                {`R$ ${element.total_price}`}
              </p>
            </div>
          ))}
        </div>
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

Orders.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
