import * as axiosHandler from 'axios';

const buildAxiosHandler = () => {
  const axios = axiosHandler.create({
    baseURL: 'http://localhost:3001',
  });

  return axios;
};

function login(user) {
  const axios = buildAxiosHandler();

  return axios.post('/login', user);
}

function profile(token) {
  const axios = buildAxiosHandler();

  return axios.get('/user/profile', {
    headers: { authorization: token },
  }).then((response) => response.data);
}

function register(user) {
  const axios = buildAxiosHandler();
  const result = axios.post('/user', user)
    .catch((err) => {
      if (err.response) {
        const time = 3000;
        const elem = document.createElement('h3');
        elem.innerHTML = err.response.data.message;
        document.querySelector('.test').append(elem);
        setTimeout(() => elem.remove(elem), time);
      }
    });

  return result;
}

function updateName(name) {
  const axios = buildAxiosHandler();

  return axios.put('/user/:id', name, { headers: { Authorization: localStorage.token } })
    .then((result) => console.log(result))
    .catch((err) => console.log(err.response));
}

export {
  login,
  profile,
  register,
  updateName,
};
