import React from 'react';
import { Redirect } from 'react-router-dom';
import PaperContainer from '../../../design-system/containers/PaperContainer';

const Orders = () => {
  const storage = JSON.parse(localStorage.getItem('user'));
  const existToken = storage ? storage.token : false;

  return (
    <div>
      { !existToken && <Redirect to="/login" /> }
      <PaperContainer>
        <p>Produtos</p>
      </PaperContainer>
    </div>
  );
};
export default Orders;
