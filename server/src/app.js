const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const passport = require('passport');
const path = require('path');

require('dotenv').configDotenv({path: path.resolve(__dirname, '../../.env')});

const connectDB = require('./config/db');
const initializePassport = require('./config/passport');
const {ensureAuth} = require('./middleware/auth.middleware');
const {errorHandler, notFoundHandler} = require('./middleware/error.middleware');

const app = express();

connectDB();
initializePassport(passport);

const origin =
	process.env.NODE_ENV === 'production'
		? 'https://secret-santa-staging.vercel.app'
		: 'http://localhost:8080';

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(morgan('common'));
app.use(helmet());
app.use(
	cors({
		origin: true,
		credentials: true,
	})
);

app.use(passport.initialize());

app.get('/', (req, res) => {
	res.status = 200;
	res.json({
		message: 'Hello World!',
	});
});

app.use('/', require('./routes/auth'));
app.use('/account', require('./routes/account'));
app.use('/events', ensureAuth, require('./routes/events'));

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
