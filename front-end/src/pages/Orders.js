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
    const { history } = this.props;
    if (!localStorage.token) {
      history.push('/login');
    }
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
          {stateOrders.length > 0 && stateOrders.map((e, index) => (
            <div
              className="order"
              key={ index }
              data-testid={ `${index}-order-card-container` }
              >
              <div>
                <button
                  type="button"
                  data-testid={ `${index}-order-number` }
                  onClick={ () => history.push(`/orders/${index + 1}`) }
                >
                  {`Pedido ${index + 1}`}
                </button>
                <h5 data-testid={ `${index}-order-date` }>
                  {`${e.sale_date.split('/')[2]}/${e.sale_date.split('/')[1]}`}
                </h5>
              </div>
              <p data-testid={ `${index}-order-total-value` }>
                {`R$ ${e.total_price.replace('.', ',')}`}
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

Orders.propTypes = {
  stateOrders: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatchOrders: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
