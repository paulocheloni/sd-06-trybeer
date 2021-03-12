import React from 'react';

import CompButton from './styles';

const Button = ({
  children,
  type,
  width,
  heigth,
  color,
  disabled,
  onClick,
  fontSize,
  dataTestid,
}) => (
  <CompButton
    type={ type }
    color={ color }
    width={ width }
    heigth={ heigth }
    fontSize={ fontSize }
    disabled={ disabled }
    onClick={ onClick }
    data-testid={ dataTestid }
  >
    {children}
  </CompButton>
);

export default Button;
