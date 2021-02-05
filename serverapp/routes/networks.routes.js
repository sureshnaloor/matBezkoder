const express = require('express');

const router = express.Router();

const networks = require('../controllers/networks.controller');

router.get('/test', async (req, res) => {
	try {
		res.json({ message: 'inside NETWORKS route API' });
	} catch (err) {
		console.log(err);
	}
});

// Retrieve all projects
router.get('/', networks.findAll);

module.exports = router;
