const getFromLocalStorage = (key) => {
  const keyFromLocalStorage = JSON.parse(localStorage.getItem(key));
  return keyFromLocalStorage;
};

export default getFromLocalStorage;
