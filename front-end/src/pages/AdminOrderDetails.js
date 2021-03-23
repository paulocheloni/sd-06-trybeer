import React from 'react';
// import PropTypes from 'prop-types';
import TopMenu from '../components/TopMenu';
// import { verifyToken } from '../utils/verifications';
// import TrybeerContext from '../context/TrybeerContext';
// import formatedPrice from '../utils/formatedPrice';

function AdminOrderDetails() {
  // const { user } = useContext(TrybeerContext);
  // const [orderCart, setOrderCart] = useState([]);
  // const [hasState, setHasState] = useState(false);
  // const { location: { state }, history } = props;
  // const { id, totalPrice, status } = state;
  // console.log(orderCart);
  // const fetchOrderDetails = async () => {
  //   if (state) {
  //     const order = await verifyToken(`sale_product/${id}`, user, history);
  //     setOrderCart(order);
  //   }
  // };

  // const observeState = () => {
  //   if (!state) {
  //     history.push('/login');
  //   } else {
  //     setHasState(true);
  //   }
  // };

  // useEffect(() => {
  //   observeState();
  //   fetchOrderDetails();
  // }, [fetchOrderDetails, observeState]);

  return (
    <div>
      <TopMenu />
      {/* {
        hasState && (
          <div>
            <div className="content-panel">
              <div>
                {
                  orderCart.map(({ quantity, name, price }, index) => (
                    <div
                      key={ state.id }
                      className="order-card-container"
                      data-testid={ `${index}-order-card-container` }
                    >

                      <div data-testid={ `${index}-product-name` }>
                        {`Nome: ${name}` }
                      </div>
                      <div data-testid={ `${index}-product-qtd` }>
                        {`Quantidade: ${quantity}` }
                      </div>
                      <div
                        className="card-total"
                        data-testid={ `${index}-order-total-value` }
                      >
                        {`Valor Unitário: ${formatedPrice(price)}` }
                      </div>
                      <div
                        className="card-total"
                        data-testid={ `${index}-product-total-value` }
                      >
                        {`Valor Total: ${formatedPrice((price * quantity).toFixed(2))}` }
                      </div>
                    </div>
                  ))
                }
              </div>
              <div data-testid="order-number">
                { `Pedido ${id}` }
              </div>
              <div data-testid="order-status">
                { status }
              </div>
              <div data-testid="order-total-value">
                { formatedPrice(totalPrice) }
              </div>
            </div>
          </div>
        )
      } */}
      <button type="button" data-testid="mark-as-delivered-btn">
        Marcar como entregue
      </button>
    </div>
  );
}

// AdminOrderDetails.propTypes = {
//   location: PropTypes.shape({
//     state: PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       status: PropTypes.string.isRequired,
//       saleDate: PropTypes.string.isRequired,
//       totalPrice: PropTypes.number.isRequired,
//     }).isRequired,
//   }).isRequired,
//   history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
// };

export default AdminOrderDetails;
