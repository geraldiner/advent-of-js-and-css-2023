const User = require('../models/User');
const { sendToken } = require('../utils/utils');

module.exports = {
  postSignup: async (req, res, next) => {
    const { fullName, email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        res.status(401);
        res.json({
          success: false,
          message: 'An account with this email already exists.',
        });
      }
      user = await User.create({
        fullName,
        email,
        password,
      });
      sendToken(user, 201, res);
    } catch (err) {
      next(err);
    }
  },
  postLogin: async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        res.status(404);
        res.json({
          success: false,
          message:
            "An account with that email/password combindation doesn't exist.",
        });
      }
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        res.status(404);
        res.json({
          success: false,
          message:
            "An account with that email/password combindation doesn't exist.",
        });
      } else {
        sendToken(user, 200, res);
      }
    } catch (err) {
      next(err);
    }
  },
  postLogout: (req, res) => {
    res
      .status(200)
      .json({ success: true, message: 'Successfully logged out.' });
  },
};
