const url = 'http://localhost:3001';

const options = {
  method: 'GET',
  
};

const clientOrders = {
  async getAll(token) {
    options.headers = {};
    options.headers.authorization = token;
    console.log(options);
    const response = await (await fetch(`${url}/orders`, options)).json();
    return response;
  },
};

export default clientOrders;
