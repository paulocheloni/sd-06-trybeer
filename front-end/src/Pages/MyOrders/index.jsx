import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../../Contexts/GlobalContext';

import MenuTop from '../../Components/MenuTop';
import SideBar from '../../Components/SideBar';

import S from './styles';

const MyOrders = () => {
  const { stateSideBar } = useContext(GlobalContext);

  const history = useHistory();

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem('user'));

    if (!userToken) history.push('/login');
  }, [history]);

  const orders = [
    { id: 1, numPedido: 1, date: '20/03', total: 2.20 },
    { id: 2, numPedido: 2, date: '20/03', total: 10.50 },
    { id: 3, numPedido: 3, date: '20/09', total: 22.20 },
  ];

  return (
    <S.Container>
      <MenuTop />

      <SideBar />

      <S.ContainerOrders stateSideBar={ stateSideBar }>
        {orders && (
          orders.map((order, index) => (
            <S.CardOrder
              key={ index }
              testid={ `${index}-order-card-container` }
              onClick={ () => history.push(`/orders/${order.numPedido}`) }
            >
              <div>
                <span data-testid={ `${index}-order-number` }>
                  {`Pedido ${order.numPedido}`}
                </span>
                <h2 data-testid={ `${index}-order-date` }>
                  {order.date}
                </h2>
              </div>
              <p data-testid={ `${index}-order-total-value` }>
                {`R$ ${(order.total).toFixed(2).replace('.', ',')}`}
              </p>
            </S.CardOrder>
          ))
        )}
      </S.ContainerOrders>

    </S.Container>
  );
};

export default MyOrders;
