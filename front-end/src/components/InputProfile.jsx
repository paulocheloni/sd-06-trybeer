import React from 'react';
import PropTypes from 'prop-types';

function InputProfile({ value, text, data }) {
  return (
    <label htmlFor={data} className={ `${data}-label`}>
      {text}
      <input
        type={data}
        name={data}
        autoComplete={ `current-profile-${data}` }
        className={`profile-${data}-input`}
        data-testid={`profile-${data}`}
        defaultValue={ value }
        readOnly
      />
    </label>
  );
}

export default InputProfile;

InputProfile.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};
