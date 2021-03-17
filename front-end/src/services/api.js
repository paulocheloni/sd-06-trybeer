const axios = require('axios');

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

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
