const updateName = (name) => {
  const previousLocalStorage = JSON.parse(localStorage.getItem('user'));
  const newLocalStorage = { ...previousLocalStorage, name };
  localStorage.setItem('user', JSON.stringify(newLocalStorage));
};

const verifyUser = (history) => {
  const storage = JSON.parse(localStorage.getItem('user'));
  if (!storage) return history.push('/login');
  const { name, email } = storage;
  return { name, email }
}

module.exports = { updateName, verifyUser };
