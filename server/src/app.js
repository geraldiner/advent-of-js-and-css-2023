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
    origin: '*',
    methods: '*',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
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
