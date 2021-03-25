import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import SideBarAdmin from '../components/SideBarAdmin';

class AdminOrders extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    const { history } = this.props;
    if (!localStorage.token) {
      history.push('/login');
    }
  }

  render() {
    const { history, stateOrders } = this.props;
    console.log(stateOrders);
    return (
      <div>
        <SideBarAdmin history={ history } />
        <div className="orders-container">
          {stateOrders.length > 0 && stateOrders.map((e, index) => (
            <div
              className="order"
              key={ index }
            >
              <button
                type="button"
                data-testid={ `${index}-order-number` }
                onClick={ () => history.push(`/orders/${index + 1}`) }
              >
                {`Pedido ${index + 1}`}
                <div
                  data-testid={ `${index}-order-address` }
                >
                  {`${e.delivery_address}, ${e.delivery_number}`}
                </div>
                <div
                  data-testid={ `${index}-order-total-value` }
                >
                  {`R$ ${e.total_price.replace('.', ',')}`}
                </div>
                <div
                  data-testid={ `${index}-order-status` }
                >
                  {e.status}
                </div>
              </button>
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

AdminOrders.propTypes = {
  stateOrders: PropTypes.arrayOf(PropTypes.object).isRequired,
  history: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps, null)(AdminOrders);
