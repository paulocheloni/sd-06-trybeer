import React from 'react';
//import AppContext from '..context/AppContext';

const Input = ({ type, onChange, name, value }) => {
  return (
    <div>
      <p>{name}</p>
      <input
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        // placeholder={ name }
      />
    </div>
  )
}

export default Input;
