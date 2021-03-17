import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [stateSideBar, setStateSideBar] = useState(false);
  const [stateSumPrice, setStateSumPrice] = useState(0);
  const [stateTheme, setStateTheme] = useState(false);
  const [cartList, setCartList] = useState([]);

  const context = {
    stateSideBar,
    setStateSideBar,
    stateSumPrice,
    setStateSumPrice,
    stateTheme,
    setStateTheme,
    cartList,
    setCartList,
  };

  return (
    <GlobalContext.Provider value={ context }>
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
