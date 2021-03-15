const frisby = require('frisby');
const Utils = require('../service/utils/index');
require('dotenv/config');
const {
  createAndInsertsDataBase,
  dropAndTruncateDataBase,
} = require('./helpers');

const BAD_REQUEST = 400;
const SUCCESS = 200;
const loginUrl = 'http://localhost:3001/login';
const productsUrl = 'http://localhost:3001/products';
const salesUrl = 'http://localhost:3001/sales';
const defaultUser = {
  email: 'novo@gmail.com',
  password: '123456',
};

describe('Testing login endpoint', () => {
  beforeEach(async () => {
    await createAndInsertsDataBase();
  });

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
          email: 'tryber@trybe.com.br',
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
          email: 'tryber@trybe.com.br',
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

describe('Testing products endpoint', () => {
  it('Should be able to get a list of all products', async () => {
    await frisby
        .get(productsUrl)
      .expect('status', SUCCESS)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.length).toBeGreaterThanOrEqual(11);
      });
  });
});

describe('Testing sales endpoint', () => {
  beforeAll(() => {
    frisby.globalSetup({
      request: {
        headers: {
          'Authorization': Utils.generateToken(1),
          'Content-Type': 'application/json',
        }
      }
    });
  })

  it('Should be able to get a sale by userId', async () => {
    await frisby
        .post(salesUrl, {
          products: [
            {
                productId: '1', 'quantity': 10
            },
            {
                productId: '2', 'quantity': 10
            }
          ],
          userId: '1',
          price: '600',
          address: 'Rua. Qualquer Uma',
          num: '123',
          status: 'pendente'
        })
      .expect('status', SUCCESS)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('Sale created.');
      });
  });

  it('Should be able to create a sale', async () => {
    await frisby
        .get(`${salesUrl}/1`)
      .expect('status', SUCCESS)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.length).toBeGreaterThanOrEqual(1);
      });
  });
});