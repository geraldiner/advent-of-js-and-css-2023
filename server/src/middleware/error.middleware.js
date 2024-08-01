const notFoundHandler = (req, res, next) => {
	const error = new Error(`Not found - ${req.originalUrl}`);
	res.status(404);
	next(error);
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
	let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
	let message = error.message;
	if (error.name === 'CastError' && error.kind === 'ObjectId') {
		statusCode = 404;
		message = 'Resource not found';
	}
	res.status(statusCode);
	res.json({
		message,
		stack: process.env.NODE_ENV === 'production' ? null : error.stack,
	});
};

module.exports = {
	notFoundHandler,
	errorHandler,
};
