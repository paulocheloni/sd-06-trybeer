const axios = require('axios');

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d52de752d8d865aaf7ff00a39f6b2173c297bf9f
// axios.get('/api/updatecart', {
//   params: {
//   product: this.product
//   }
//   }).then(...);

  // send a POST request
// axios({
//   method: 'get',
//   url: '/profile',
//   data: 'batatinha',
//   });

// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

export default api;
<<<<<<< HEAD
=======
=======

>>>>>>> d52de752d8d865aaf7ff00a39f6b2173c297bf9f
export const getUserByEmail = async (user) => {
  const requestResponse = await api.post('login', user)
    .then((response) => response.data)
    .catch((error) => (error.response.data));

  return requestResponse;
};

export const createNewUSer = async (user) => {
  const requestResponse = await api.post('register', user)
    .then((response) => response.data)
    .catch((error) => error.response.data);

  return requestResponse;
};
<<<<<<< HEAD
>>>>>>> b04a57646c8acd03b1533cc996acc137afb3ec2c
=======

>>>>>>> d52de752d8d865aaf7ff00a39f6b2173c297bf9f
