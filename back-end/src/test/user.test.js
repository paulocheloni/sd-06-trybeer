const frisby = require('frisby');
require('dotenv/config');

const BAD_REQUEST = 400;
const SUCCESS = 200;
const loginUrl = 'http://localhost:3001/login';
const defaultUser = {
  email: 'novo@gmail.com',
  password: '123456',
};

describe('Testing login endpoint', () => {
  it('Should not be able to login without e-mail', async () => {
    await frisby
        .post(loginUrl,
        {
          password: '123456',
        })
      .expect('status', BAD_REQUEST)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('Invalid entries. Try again.');
      });
  });

  it('Should not be able to login without password', async () => {
    await frisby
      .post(loginUrl,
        { 
          email: 'novo@gmail.com',
        })
      .expect('status', BAD_REQUEST)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('Invalid entries. Try again.');
      });
  });

  it('Should receive a token if login succeed', async () => {
    await frisby
      .post(loginUrl,
        { 
          email: 'novo@gmail.com',
          password: '123456',
        })
      .expect('status', SUCCESS)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.token).not.toBeNull();
      });
  });
});
