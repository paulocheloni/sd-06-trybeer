const urlLogin = 'http://localhost:3001/login';

const login = async (user) => {
  const postMethod = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user,
    }),
  };

  const apiRequest = await fetch(urlLogin, postMethod);
  const apiResponse = await apiRequest.json();
  localStorage.setItem('token', JSON.stringify(apiResponse.token));
};

export default login;
