const express = require('express');

const router = express.Router();

const materialdocuments = require('../controllers/materialdocuments.controller');

router.get('/test', async (req, res) => {
	try {
		res.json({ message: 'inside MATERIALDOCUMENTS route API' });
	} catch (err) {
		console.log(err);
	}
});

// Retrieve all projects
router.get('/', materialdocuments.findAll);

module.exports = router;
