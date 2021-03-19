const Accept = 'application/json';

const urlBase = 'http://localhost:3001';

const get = (endpoint, authorization) => fetch(`${urlBase}/${endpoint}`,
  {
    method: 'GET',
    headers: {
      Accept,
      'Content-Type': Accept,
      authorization,
    },
  })
  .then((e) => e.json())
  .catch((e) => e.message);

const post = async (endpoint, user) => fetch(`${urlBase}/${endpoint}`,
  {
    method: 'POST',
    headers: {
      Accept,
      'Content-Type': Accept,
    },
    body: user ? JSON.stringify(user) : undefined,
  })
  .then((e) => e.json())
  .catch((e) => e.message);

const put = async (endpoint, authorization, user) => fetch(`${urlBase}/${endpoint}`,
  {
    method: 'PUT',
    headers: {
      Accept,
      'Content-Type': Accept,
      authorization,
    },
    body: user ? JSON.stringify(user) : undefined,
  })
  .then((e) => e.json())
  .catch((e) => e.message);

module.exports = { get, post, put };
