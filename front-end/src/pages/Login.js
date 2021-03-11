import React, { useContext } from 'react';
import TrybeerContext from '../context/TrybeerContext';

function Login() {
  const { products } = useContext(TrybeerContext);
  console.log(products);
  return (
    <div>
      Login!!
    </div>
  );
}

export default Login;
