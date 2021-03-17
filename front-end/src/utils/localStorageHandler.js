const updateName = (name) => {
  const previousLocalStorage = JSON.parse(localStorage.getItem('user'));
  const newLocalStorage = { ...previousLocalStorage, name };
  localStorage.setItem('user', JSON.stringify(newLocalStorage));
};

module.exports = { updateName };
