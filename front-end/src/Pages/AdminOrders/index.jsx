import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { GlobalContext } from '../../Contexts/GlobalContext';
import { getAllAdminOrders } from '../../Services/Apis';

import MenuTopAdmin from '../../Components/MenuTopAdmin';
import SideBarAdmin from '../../Components/SideBarAdmin';

import S from './styles';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  const { stateSideBarAdmin } = useContext(GlobalContext);

  const history = useHistory();

  // const orders = [
  //   { id: 1, numPedido: 1, date: '08/09', total: 2.20 },
  //   { id: 2, numPedido: 2, date: '10/09', total: 10.50 },
  //   { id: 3, numPedido: 3, date: '20/09', total: 22.20 },
  // ];

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem('user'));

    if (!userToken) history.push('/login');
  }, [history]);

  useEffect(() => {
    const fetchMyOrders = async () => {
      const fetchData = await getAllAdminOrders();
      console.log(fetchData);
      setOrders(fetchData);
    };
    fetchMyOrders();
  }, []);

  return (
    <>
      <MenuTopAdmin dataTestid="top-title" title="Meu perfil" />

      <S.Context>
        <SideBarAdmin />

        <S.Container stateSideBar={ stateSideBarAdmin }>
          <S.ContainerOrders stateSideBar={ stateSideBarAdmin }>
            {orders && (
              orders.map((order, index) => (
                <S.CardOrder
                  key={ index }
                  onClick={ () => history.push(`/admin/orders/${order.id}`) }
                >
                  <div className="div-address">
                    <span data-testid={ `${index}-order-number` }>
                      {`Pedido ${order.id}`}
                    </span>
                    <span data-testid={ `${index}-order-address` }>
                      {`${order.address}, ${order.number}`}
                    </span>
                  </div>

                  <div className="div-total-value">
                    <p data-testid={ `${index}-order-total-value` }>
                      {`R$ ${(order.totalValue).replace('.', ',')}`}
                    </p>
                    <span data-testid={ `${index}-order-status` }>
                      {order.status}
                    </span>
                  </div>
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
