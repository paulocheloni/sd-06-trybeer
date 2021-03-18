import React from 'react';
import PropTypes from 'prop-types';

function LabeledInput({
  value,
  label,
  id,
  name,
  type,
  autoComplete,
  testId,
  onChange,
  readOnly,
}) {
  return (
    <div>
      <label htmlFor={ id }>{ label }</label>
      <input
        readOnly={ readOnly }
        value={ value }
        data-testid={ testId }
        id={ id }
        name={ name }
        type={ type }
        autoComplete={ autoComplete }
        required
        onChange={ ({ target }) => onChange(target.value) }
        className="appearance-none rounded-none relative block w-full px-3 py-2 border
          border-gray-300 placeholder-gray-500 text-gray-900 rounded-md
          focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
          focus:z-10 sm:text-sm"
      />
    </div>
  );
}

LabeledInput.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  autoComplete: PropTypes.string,
  testId: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default LabeledInput;
