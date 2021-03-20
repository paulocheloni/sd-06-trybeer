import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Error() {
  const { state } = useLocation();

  console.log(state);
  return (
    <div>
      { (state.code && state.code === 'C_ERR_EMAIL_UNAVAIBLE')
        ? <h2>E-mail already in database.</h2>
        : <h2>Something went (utterly) wrong.</h2> }
    </div>
  );
}
