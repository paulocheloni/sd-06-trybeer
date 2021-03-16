import React from 'react';
import PropTypes from 'prop-types';

import S from './styles';

const Input = ({
  readOnly,
  onChange,
  dataTestid,
  label,
  id,
  value,
  themeStorage,
  icon: Icon,
}) => {
  let trueOrFalse = false;

  if (Icon) {
    trueOrFalse = true;
  }

  return (
    <S.CompInput htmlFor={ id } themeStorage={ themeStorage }>
      {label}

      {Icon ? (
        <div>
          <div>
            { Icon && <Icon size={ 20 } /> }
          </div>

          <S.Input
            id={ id }
            isIcon={ trueOrFalse }
            value={ value }
            data-testid={ dataTestid }
            onChange={ (e) => onChange(e) }
            readOnly={ readOnly }
            themeStorage={ themeStorage }
          />
        </div>
      ) : (
        <S.Input
          id={ id }
          isIcon={ trueOrFalse }
          value={ value }
          data-testid={ dataTestid }
          onChange={ (e) => onChange(e) }
          readOnly={ readOnly }
          themeStorage={ themeStorage }
        />
      )}
    </S.CompInput>
  );
};

Input.defaultProps = {
  readOnly: false,
  themeStorage: '',
  value: undefined,
  onChange: () => {},
  icon: undefined,
};

Input.propTypes = {
  onChange: PropTypes.func,
  dataTestid: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  readOnly: PropTypes.bool,
  value: PropTypes.string,
  themeStorage: PropTypes.string,
  icon: PropTypes.elementType,
};

export default Input;
