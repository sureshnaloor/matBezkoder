const express = require('express');

const router = express.Router();

const specialstock = require('../controllers/specialstock.controller');

router.get('/test', async (req, res) => {
	try {
		res.json({ message: 'inside SPECIALSTOCK route API' });
	} catch (err) {
		console.log(err);
	}
});

// Retrieve all stock whose value is > 1
router.get('/', specialstock.findEach);

module.exports = router;
