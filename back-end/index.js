const express = require('express');
const cors = require('cors');
require('dotenv').config();

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,PUT,POST,DELETE',
};

const app = express();
const port = 3001;

const bodyParser = require('body-parser');

const usersRouter = require('./controller/usersController');

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use('/users', usersRouter);

app.listen(port, () => console.log(`Listening to port ${port}`));
