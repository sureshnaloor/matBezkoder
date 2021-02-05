const express = require('express');

const router = express.Router();

const completestock = require('../controllers/completestock.controller');

router.get('/test', async (req, res) => {
	try {
		res.json({ message: 'inside COMPLETESTOCK route API' });
	} catch (err) {
		console.log(err);
	}
});

// Retrieve all projects
router.get('/', completestock.findAll);

module.exports = router;
