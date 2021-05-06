const express = require('express');
const router = express.Router();
const networks = require('../controllers/networks.controller');

router.get('/test', async (_, res) => {
	try {
		res.json({ message: 'inside NETWORKS route API' });
	} catch (err) {
		console.log(err);
	}
});

// Retrieve all networks
router.get('/', networks.findAll);

//retrieve a single network
router.get('/:id', networks.findOne);

module.exports = router;
