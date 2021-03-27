import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { allOrders } from '../actions';
import { getAllOrders } from '../api';
import SideBarAdmin from '../components/SideBarAdmin';
import './AdminOrders.css';

class AdminOrders extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    const orders = await getAllOrders();
    this.separateDate(orders);
    const { history } = this.props;
    if (!localStorage.token) {
      history.push('/login');
    }
  }

  separateDate(array) {
    const { dispatchOrders } = this.props;
    for (let index = 0; index < array.length; index += 1) {
      const newDate = array[index].sale_date.split('T')[0].split('-');
      array[index].sale_date = `${newDate[2]}/${newDate[1]}`;
    }
    dispatchOrders(array);
  }

  render() {
    const { history, stateOrders } = this.props;
    // console.log(stateOrders);
    return (
      <div>
        <SideBarAdmin history={ history } />
        <div className="container">
          {stateOrders.length > 0 && stateOrders.map((e, index) => (
            <div
              className="order"
              key={ index }
            >
              <div>
                <button
                  type="button"
                  data-testid={ `${index}-order-number` }
                  onClick={ () => history.push(`/admin/orders/${index + 1}`) }
                >
                  {`Pedido ${index + 1}`}
                </button>
                <span data-testid={ `${index}-order-address` }>
                  {`${e.delivery_address}, ${e.delivery_number}`}
                </span>
              </div>
              <p data-testid={ `${index}-order-total-value` }>
                {`R$ ${e.total_price.replace('.', ',')}`}
              </p>
              <p data-testid={ `${index}-order-status` }>
                {`${e.status}`}
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

AdminOrders.propTypes = {
  stateOrders: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatchOrders: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminOrders);
