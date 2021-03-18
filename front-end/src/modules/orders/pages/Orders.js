import React from 'react';
import PaperContainer from '../../../design-system/containers/PaperContainer';

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
      <PaperContainer>
        <p>Pedidos</p>
      </PaperContainer>
    </div>
  );
};
export default Orders;
