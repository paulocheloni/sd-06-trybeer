import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TopMenu from '../components/TopMenu';
import SidebarMenu from '../components/SideBarMenu';
import { verifyToken } from '../utils/verifications';
import fetchFunctions from '../api/fetchFunctions';
import OrderCard from '../components/OrderCard';
import TrybeerContext from '../context/TrybeerContext';
import formatedDate from '../utils/formatedDate';
import formatedPrice from '../utils/formatedPrice';

function OrderDetails(props) {
  const { user } = useContext(TrybeerContext);
  const [orderCart, setOrderCart] = useState([]);
  const { location: { state }, history } = props;
  const { id, saleDate, totalPrice } = state;

  const fetchOrderDetails = async () => {
    const order = await verifyToken(`sale_product/${id}`, user, history);
    const orderWithPrice = await order.map(async (item) => {
      const product = await fetchFunctions.get(`products/${item.product_id}`, user.token);
      return ({ ...item, ...product});
    });
    return Promise.all(orderWithPrice);
  };

  useEffect(() => {
   fetchOrderDetails().then((item => setOrderCart(item)));
  }, [])

  
  return (
    <div>
      <TopMenu titleMenu='Detalhes de Pedido' />
      <SidebarMenu />
      <div className='content-panel'>
        <div>
        {
          orderCart.map(({ quantity, name, price }, index) => (
            <div
            key={ id }
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
        <div data-testid='order-number'>
          { `Pedido ${id}` }
        </div>
        <div data-testid='order-date'>
          { formatedDate(saleDate) }
        </div>
        <div data-testid='order-total-value'>
          { formatedPrice(totalPrice) }
        </div>
      </div>
    </div>
  );
}

OrderDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default OrderDetails;
