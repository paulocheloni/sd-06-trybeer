import React, { useEffect, useState } from 'react';

const pattern = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
const delay = 500;

function EmailInput(setError, setInputValue, inputValue) {
  const [errorLabel, setErrorLabel] = useState();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    const validation = pattern.test(value);
    setInputValue((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: !validation }));
  };

  const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(
      () => {
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);

        return () => {
          clearTimeout(handler);
        };
      },
      [value, delay],
    );

    return debouncedValue;
  };

  const debounceValue = useDebounce(inputValue, delay);

  useEffect(() => {
    if (errorLabel !== undefined && inputValue !== '') {
      setErrorLabel(!pattern.test(inputValue));
    }
  }, [debounceValue]);

  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor="email-ipt" className="flex flex-col space-y-2">
        <p>Email*</p>
        <input
          id="email-ipt"
          data-testid="email-input"
          name="email"
          type="text"
          value={ inputValue }
          onChange={ handleChange }
          className="border rounded-md p-2 focus:outline-none
          focus:border-secondary-dark"
          placeholder="Enter your email..."
          required
          onKeyUp={ () => setErrorLabel(false) }
        />
      </label>
      <p className={ errorLabel ? 'text-xs text-red-500' : 'hidden' }>
        Email should be like name@domain.com
      </p>
    </div>
  );
}

export default EmailInput;
