import { useState, useEffect } from 'react';

const useStorage = (key, initialValue = undefined) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(JSON.parse(localStorage.getItem(key)));
  }, [key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return setValue;
};

export default useStorage;
