const express = require('express');
const cors = require('cors');
const path = require('path');
const LoginController = require('./src/controller/LoginControler');
const UsersController = require('./src/controller/UsersController');
const ProductsController = require('./src/controller/ProductsController');
const ProfileController = require('./src/controller/ProfileController');
const checkoutController = require('./src/controller/checkoutController');

const app = express();

const PORT = 3001;

app.use(express.json());
app.use(cors());

app.use('/login', LoginController);

app.use('/register', UsersController);
app.use('/products', ProductsController);
app.use('/images', express.static(path.resolve(__dirname, 'images')));
app.use('/profile', ProfileController);
app.use('/checkout', checkoutController);

app.use((err, _req, res, _next) => {
  res.status(err.status || 500).json(err.message);
});

app.listen(PORT, console.log(`Experando Requisições na porta ${PORT}`));
