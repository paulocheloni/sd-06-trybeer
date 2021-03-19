const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const images = require('../images.tar.gz');
const { routerLogin,
<<<<<<< HEAD
  routerRegister, routerProducts, routerProfile, routerSales } = require('./controllers');
=======
   routerSales, routerRegister, routerProducts, routerProfile } = require('./controllers');
>>>>>>> d3f27784aa1cf0f3d27866eb1f6973296450afc5

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/uploads`));

app.get('/', (_req, res) => res.send('Hello World!'));

app.use('/login', routerLogin);
app.use('/products', routerProducts);
app.use('/profile', routerProfile);
app.use('/register', routerRegister);
<<<<<<< HEAD
app.use('/sales', routerSales);
=======
app.use('/orders', routerSales);
>>>>>>> d3f27784aa1cf0f3d27866eb1f6973296450afc5

app.use(async (err, _req, res, _next) => {
  console.log(err);
  res.status(err.status).json({ message: err.message });
});

app.listen(port, () => `Running on ${port}`);