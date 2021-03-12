import React from 'react';

import CompInput from './styles';

const Input = ({
  placeholder,
  onChange,
  width,
  heigth,
  fontSize,
  dataTestid,
}) => (
  <CompInput
    data-testid={ dataTestid }
    onChange={ (e) => onChange(e) }
    placeholder={ placeholder }
    width={ width }
    heigth={ heigth }
    fontSize={ fontSize }
  />
);

export default Input;
