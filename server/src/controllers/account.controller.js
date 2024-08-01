const User = require('../models/User');

module.exports = {
	getAccount: async (req, res) => {
		const user = await User.findById(req.user._id);
		if (user) {
			res.status(200);
			res.json({
				success: true,
				user: {
					_id: user._id,
					name: user.name,
					email: user.email,
				},
			});
		} else {
			res.status(404);
			throw new Error('Account not found');
		}
	},
	updateAccount: async (req, res) => {
		const user = await User.findById(req.user._id);
		if (user) {
			user.name = req.body.name || user.name;
			user.email = req.body.email || user.email;

			if (req.body.password) {
				user.password = req.body.password;
			}
			const updatedUser = await user.save();
			res.status(200);
			res.json({
				success: true,
				user: {
					_id: updatedUser._id,
					name: updatedUser.name,
					email: updatedUser.email,
				},
			});
		} else {
			res.status(404);
			throw new Error('Account not found');
		}
	},
	getDashboard: (req, res) => {
		res.status(200);
		res.json({success: true, message: 'We got the dashboard'});
	},
};
