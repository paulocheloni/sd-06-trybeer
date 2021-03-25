import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Menu from '../../Components/Menu';
import CardOrders from '../../Components/cardOrders';
import * as S from './style';

const AdminOrders = () => {
  const history = useHistory();

  useEffect(() => {
    if (!window.localStorage.token) {
      history.push('/login');
    }
  });

  return (
    <S.Container>
      <Menu><p data-testid="top-title">Admin Pedido</p></Menu>
      <CardOrders />
    </S.Container>
  );
};

export default AdminOrders;
