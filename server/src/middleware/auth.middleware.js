const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
module.exports = {
	ensureAuth: asyncHandler(async (req, res, next) => {
		const token = req.body.token;

		if (token) {
			try {
				const decoded = jwt.verify(token, process.env.JWT_SECRET);
				req.user = await User.findById(decoded.id).select('-password');
				next();
			} catch (error) {
				res.status(401);
				throw new Error('Not authorized - invalid token');
			}
		} else {
			res.status(401);
			throw new Error('Not authorized - no token');
		}
		if (req.isAuthenticated()) {
			return next();
		}
	}),
};
