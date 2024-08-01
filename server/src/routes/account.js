const express = require('express');

const {getAccount, getDashboard, updateAccount} = require('../controllers/account.controller');
const {ensureAuth} = require('../middleware/auth.middleware');

const router = express.Router();

/**
 * @route GET /dashboard
 * @desc Get the logged in user's dashboard
 * @access Private
 */
router.get('/dashboard', ensureAuth, getDashboard);

/**
 * GET /account
 * @desc Get the logged in user's account
 * @access Private
 */

/**
 * PUT /account
 * @desc Update the logged in user's account
 * @access Private
 */

router.route('/account').get(ensureAuth, getAccount).put(ensureAuth, updateAccount);

module.exports = router;
