const express = require('express');
const cors = require('cors');
const userController = require('./controller/userController');
const unexpectedError = require('./middlewares/unexpectedError');
require('dotenv').config();

const app = express();
const PORT = 3001;
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send('ok'));

app.use('/login', userController);

app.use(unexpectedError);

app.listen(PORT, () => console.log(`Example app listening on ${PORT}!`));
