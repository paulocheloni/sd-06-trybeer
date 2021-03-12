import React from 'react';

import CompButton from './styles';

const Button = ({ children, type, width, heigth, color, disabled }) => (
  <CompButton
    type={ type }
    color={ color }
    width={ width }
    heigth={ heigth }
    disabled={ disabled }
  >
    {children}
  </CompButton>
);

export default Button;
