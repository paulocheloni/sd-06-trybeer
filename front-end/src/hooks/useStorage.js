import { useState, useCallback } from 'react';

const useStorage = (key) => {
  const currentValue = (key === 'login')
    ? JSON.parse(localStorage.getItem(key)) || { name: '', email: '' }
    : JSON.parse(localStorage.getItem(key)) || {};

  const [value, setValue] = useState(currentValue);

  const updateStorage = useCallback((payload) => {
    if (payload && value.email !== payload.email) {
      setValue(payload);
      localStorage.setItem(key, JSON.stringify(payload));
    }
    if (payload && !payload.email) {
      setValue(payload);
      localStorage.setItem(key, JSON.stringify(payload));
    }
  }, [value, key]);

  return updateStorage;
};

export default useStorage;