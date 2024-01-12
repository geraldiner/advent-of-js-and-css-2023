const express = require('express');

const router = express.Router();
const { getEvents } = require('../controllers/events.controller');

/**
 * @route GET /events
 * @desc Get the event overview dashboard for a logged in user
 */
router.get('/', getEvents);

module.exports = router;
