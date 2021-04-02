import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TrybeerContext from './TrybeerContext';

const Provider = ({ children }) => {
  const [loginUser, setLoginUser] = useState(
    {
      name: '',
      email: '',
      password: '',
      error: false,
      wantToSell: false,
    },
  );

  // const getUser = () => {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   return user;
  // };

  // const setUser = (data) => {
  //   const user = localStorage.setItem('user', JSON.stringify(data));
  //   return user;
  // };

  // const contextConsts = {
  //   loginUser,
  //   setLoginUser,
  // }

  return (
    <TrybeerContext.Provider value={ { loginUser, setLoginUser } }>
      {children}
    </TrybeerContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Provider;
