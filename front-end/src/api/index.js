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

function updateName(name, id) {
  const axios = buildAxiosHandler();

  return axios.put(`/user/${id}`,
    { name },
    { headers: { Authorization: localStorage.token } });
}

async function getProducts(setProducts) {
  const axios = buildAxiosHandler();
  const token = localStorage.getItem('token');
  axios.get('/products', {
    headers: {
      authorization: token,
    } }).then((response) => setProducts(response.data));
}

export {
  getProducts,
  login,
  profile,
  register,
  updateName,
};
