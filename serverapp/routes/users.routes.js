const express = require('express');
const router = express.Router();
const users = require('../controllers/users.controller');

const { requireLogin } = require('../../middleware/auth');

router.get('/test', async (_, res) => {
	try {
		res.json({ message: 'inside USERS route API' });
	} catch (err) {
		console.log(err);
	}
});

// Register user
router.post('/register', users.register);

// Login user
router.post('/login', users.login);

//protected route
router.get('/', requireLogin, users.requireAuth);

module.exports = router;
