import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import MenuTop from '../../Components/MenuTop';
import SideBar from '../../Components/SideBar';

import { GlobalContext } from '../../Contexts/GlobalContext';

import S from './styles';

const OrderDetails = () => {
  const { stateSideBar } = useContext(GlobalContext);

  const history = useHistory();

  const orders = {
    numOrder: 1,
    date: '08/09/2021',
    orderValue: 17.20,
    products: [{
      quantity: 1,
      description: 'Skol Lata 250ml',
      valueTotal: 2.20,
    },
    {
      quantity: 3,
      description: 'Stella 330ml',
      valueTotal: 7.50,
    },
    {
      quantity: 5,
      description: 'Heineken 600ml',
      valueTotal: 7.50,
    },
    {
      quantity: 6,
      description: 'Bhahma lata 350ml',
      valueTotal: 7.50,
    }],
  };

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem('user'));

    if (!userToken) history.push('/login');
  }, [history]);

  return (
    <S.Container>

      <MenuTop />

      <SideBar />

      <S.ContainerOrder stateSideBar={ stateSideBar }>
        <S.TopInfos>

          <h2 data-testid="order-number">
            {`Pedidos ${orders.numOrder} `}
          </h2>
          <span data-testid="order-date">
            {(orders.date).replace('/2021', '')}
          </span>
        </S.TopInfos>

        <S.ContainerDescription>
          <span>Qtd.</span>
          <span>Produto</span>
          <span>Valor</span>
        </S.ContainerDescription>

        { orders && (
          orders.products.map((product, index) => (
            <S.ContainerInfos key={ index }>
              <span
                className="quantity"
                data-testid="0-product-qtd"
              >
                {`${product.quantity} -`}
              </span>
              <span
                className="description"
                data-testid="0-product-name"
              >
                {product.description}
              </span>
              <span data-testid="0-product-total-value">
                R$
                {' '}
                {`${(product.valueTotal.toFixed(2)).replace('.', ',')}`}
              </span>
            </S.ContainerInfos>
          )))}

        <S.Total data-testid="order-total-value">
          R$
          {' '}
          {`${(orders.orderValue.toFixed(2)).replace('.', ',')}`}
        </S.Total>
      </S.ContainerOrder>

    </S.Container>
  );
};

export default OrderDetails;
