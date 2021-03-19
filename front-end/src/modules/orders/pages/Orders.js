import React from 'react';
import { useHistory } from 'react-router-dom';
import PaperContainer from '../../../design-system/containers/PaperContainer';
import PageMenu from '../../../design-system/page-menu/PageMenu';

const Orders = () => {
  const history = useHistory();
  const storage = JSON.parse(localStorage.getItem('user'));
  const existToken = storage ? storage.token : false;

  const timeout = 2000;

  setTimeout(() => {
    if (!existToken) history.push('/login');
  }, timeout);

  return (
    <div>
      <PageMenu pageName="Pedidos" />
      <PaperContainer>
        <p>Pedidos</p>
      </PaperContainer>
    </div>
  );
};
export default Orders;
