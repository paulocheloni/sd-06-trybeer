import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [stateSideBar, setStateSideBar] = useState(false);
  const [stateSumPrice, setStateSumPrice] = useState(0);

  const context = {
    stateSideBar,
    setStateSideBar,
    stateSumPrice,
    setStateSumPrice,
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
