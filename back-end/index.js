const express = require('express');
const cors = require('cors');
const RegisterController = require('./controllers/RegistersController');
const ProductsController = require('./controllers/ProductsController');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/register', RegisterController);

app.use('/products', ProductsController);

app.use('/images', express.static(__dirname.concat('/images'))); 

app.listen(port, () => console.log(`Example app listening on port ${port}!`));