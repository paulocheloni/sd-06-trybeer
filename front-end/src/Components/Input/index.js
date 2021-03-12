import React from 'react';

import CompInput from './styles';

const Input = ({
  placeholder,
  onChange,
  heigth,
  dataTestid,
}) => (
  <CompInput
    data-testid={ dataTestid }
    onChange={ (e) => onChange(e) }
    placeholder={ placeholder }
    heigth={ heigth }
  />
);

export default Input;
