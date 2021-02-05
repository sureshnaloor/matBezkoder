const express = require('express');

const router = express.Router();

const purchaseorders= require('../controllers/purchaseorders.controller');

router.get('/test', async (req, res) => {
	try {
		res.json({ message: 'inside PURCHASE-ORDERS route API' });
	} catch (err) {
		console.log(err);
	}
});

// Retrieve all purchaseorders
router.get('/', purchaseorders.findAll);

module.exports = router;
