const express = require('express');

const {
  postSignup,
  postLogin,
  postLogout,
} = require('../controllers/auth.controller');
const { ensureAuth } = require('../middleware/auth.middleware');

const router = express.Router();

/**
 * @route POST /signup
 * @desc Process sign up form
 * @access Public
 */
router.post('/signup', postSignup);

/**
 * @route POST /login
 * @desc Process login form
 * @access Public
 */
router.post('/login', postLogin);

/**
 * @route POST /logout
 * @desc Log out the current user
 * @access Private
 */

router.post('/logout', ensureAuth, postLogout);

module.exports = router;
