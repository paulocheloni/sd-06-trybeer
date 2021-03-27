require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const error = require('./middlewares/error');
const loginRouter = require('./controllers/loginController');

const app = express();
const { PORT } = process.env || 3001;

// app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/login', loginRouter);

app.all('*', (_req, res) => {
  res
    .status(404)
    .json({ message: 'EndPoint não existe' });
});

app.use(error);

app.listen(PORT, () => console.log(`Server rodando na porta:  ${PORT}`));