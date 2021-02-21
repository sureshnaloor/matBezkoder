const express = require('express');

const router = express.Router();

const vendors = require('../controllers/vendors.controller');

router.get('/test', async (req, res) => {
	try {
		res.json({ message: 'inside vendors route API' });
	} catch (err) {
		console.log(err);
	}
});


// Retrieve all vendors (subject to search query params)
router.get('/', vendors.findAll);

// find a single vendor through id
router.get('/:id', vendors.findOne)

module.exports = router;
