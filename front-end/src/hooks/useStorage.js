import { useState, useEffect } from 'react';

const useStorage = (key, initialValue = undefined) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(JSON.parse(localStorage.getItem(key)));
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useStorage;
