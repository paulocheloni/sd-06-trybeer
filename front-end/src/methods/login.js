const urlLogin = 'localhost:3001/login';

function login({ email, password }) {
  fetch(urlLogin, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      email, password,
    }),
  });
}

export default login;
