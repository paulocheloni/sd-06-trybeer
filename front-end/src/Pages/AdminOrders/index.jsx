import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { GlobalContext } from '../../Contexts/GlobalContext';

import MenuTopAdmin from '../../Components/MenuTopAdmin';
import SideBarAdmin from '../../Components/SideBarAdmin';

import S from './styles';
import { getAllAdminOrders } from '../../Services/Apis';

const AdminOrders = () => {
  const { stateSideBar } = useContext(GlobalContext);

  const history = useHistory();

  const [orders, setOrders] = useState();

  useEffect(() => {
    const fetchMyOrders = async () => {
      const fetchData = await getAllAdminOrders();
      setOrders(fetchData);
    };

    fetchMyOrders();
  }, []);

  useEffect(() => {
    const userStorage = JSON.parse(localStorage.getItem('user'));

    if (!userStorage) history.push('/login');
  }, [history]);

  return (
    <>
      <MenuTopAdmin dataTestid="top-title" title="Meu perfil" />

      <S.Context>
        <SideBarAdmin />

        <S.Container stateSideBar={ stateSideBar }>
          <S.ContainerOrders stateSideBar={ stateSideBar }>
            {orders
              ? (
                orders.map((order, index) => (
                  <S.CardOrder
                    key={ index }
                    testid={ `${index}-order-card-container` }
                    onClick={ () => history.push(`/orders/${order.id}`) }
                  >
                    <div>
                      <span data-testid={ `${index}-order-number` }>
                        {`Pedido ${order.id}`}
                      </span>
                      <span data-testid={ `${index}-order-date` }>
                        {order.date}
                      </span>
                    </div>
                    <p data-testid={ `${index}-order-total-value` }>
                      {`R$ ${Number(order.totalValue).toFixed(2).replace('.', ',')}`}
                    </p>
                  </S.CardOrder>
                ))
              )
              : 'Loading'}
          </S.ContainerOrders>

        </S.Container>
      </S.Context>
    </>
  );
};

export default AdminOrders;
