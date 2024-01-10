const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

require('dotenv').configDotenv({ path: '../.env' });

const connectDB = require('./config/db');
const middlewares = require('./middlewares');

const app = express();

connectDB();

app.use(morgan('common'));
app.use(helmet());
app.use(
  cors({
    origin:
      /(https:\/\/secret-santa-staging(-[\w]+-[\w]+-[\w]+-[\w]+)?.vercel.app)|(http:\/\/localhost:8080)|(http:\/\/localhost:4040)/g,
  }),
);

app.get('/', (req, res) => {
  res.status = 200;
  res.json({
    message: 'Hello World!',
  });
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
