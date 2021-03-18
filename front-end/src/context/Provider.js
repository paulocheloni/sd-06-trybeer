import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextBeer from './ContextBeer';

function Provider({ children }) {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState('');
  const [products, setProducts] = useState([]);
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerIsDisabled, setRegisterIsDisabled] = useState('');

  const storedSale = JSON.parse(localStorage.getItem('sale'));
  const initialStateSale = {
    products: [],
    total: 0,
  };
  const [sale, setSale] = useState(storedSale || initialStateSale);

  const getUser = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
  };

  const setUser = (data) => {
    const user = localStorage.setItem('user', JSON.stringify(data));
    console.log(getUser());
    return user;
  };

  const contextData = {
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
    isDisabled,
    setIsDisabled,
    products,
    setProducts,
    registerName,
    setRegisterName,
    registerEmail,
    setRegisterEmail,
    registerPassword,
    setRegisterPassword,
    registerIsDisabled,
    setRegisterIsDisabled,
    sale,
    setSale,
    getUser,
    setUser,
  };

  return (
    <ContextBeer.Provider value={ contextData }>
      { children }
    </ContextBeer.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
