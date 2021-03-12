import React from 'react';

import CompInput from './styles';

const Input = ({ placeholder, onChange, width, heigth }) => (
  <CompInput
    onChange={ (e) => onChange(e) }
    placeholder={ placeholder }
    width={ width }
    heigth={ heigth }
  />
);

export default Input;
