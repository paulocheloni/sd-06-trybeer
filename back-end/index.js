require('dotenv').config();
const cors = require('cors');
const express = require('express');
const { json } = require('body-parser');
const { usersRouter } = require('./controllers/users');

const app = express();
const port = 3001;

app.use(json());
app.use(cors());
app.use('/users', usersRouter);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
