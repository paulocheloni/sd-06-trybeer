const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (_req, res) => res.send('Hello World!'));

app.get('/login', (_req, res) => res.send('Estou na pagina de login'));

app.post('/login', (req, res) => {
  const { user } = req.body;
  console.log(user);
  res.status(201).json({ status: 'ok' });
});

app.listen(port, () => `Running on ${port}`);