import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { GlobalContext } from '../../Contexts/GlobalContext';

import MenuTopAdmin from '../../Components/MenuTopAdmin';
import SideBarAdmin from '../../Components/SideBarAdmin';

import S from './styles';

const AdminOrders = () => {
  const { stateSideBar } = useContext(GlobalContext);

  const history = useHistory();

  const orders = [
    { id: 1, numPedido: 1, date: '08/09', total: 2.20 },
    { id: 2, numPedido: 2, date: '10/09', total: 10.50 },
    { id: 3, numPedido: 3, date: '20/09', total: 22.20 },
  ];

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem('user'));

    if (!userToken) history.push('/login');
  }, [history]);

  return (
    <>
      <MenuTopAdmin dataTestid="top-title" title="Meu perfil" />

      <S.Context>
        <SideBarAdmin />

        <S.Container stateSideBar={ stateSideBar }>
          <S.ContainerOrders stateSideBar={ stateSideBar }>
            {orders && (
              orders.map((order, index) => (
                <S.CardOrder
                  key={ index }
                  testid="0-order-card-container"
                  onClick={ () => history.push('/orders/:num') }
                >
                  <div>
                    <span data-testid="0-order-number">
                      {`Pedido ${order.numPedido}`}
                    </span>
                    <span data-testid="0-order-date">
                      {order.date}
                    </span>
                  </div>
                  <p data-testid="0-order-total-value">
                    {`R$ ${(order.total).toFixed(2).replace('.', ',')}`}
                  </p>
                </S.CardOrder>
              ))
            )}
          </S.ContainerOrders>

        </S.Container>
      </S.Context>
    </>
  );
};

export default AdminOrders;
