const { endpoint } = require('./utils');

module.exports = (email, password) => {
  return fetch(`${endpoint}/login`, {
    method: 'post',
    headers: {
    "Content-type": "application/json"
    },
    body: JSON.stringify({email, password}),
    })
      .then(response => response.json())
      // .then(result => result);
}
