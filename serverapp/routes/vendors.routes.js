const express = require('express');

const router = express.Router();

const vendors = require('../controllers/vendors.controller');

router.get('/test', async (req, res) => {
	try {
		res.json({ message: 'inside VENDORS route API' });
	} catch (err) {
		console.log(err);
	}
});

// Retrieve all projects
router.get('/', vendors.findAll);

module.exports = router;
