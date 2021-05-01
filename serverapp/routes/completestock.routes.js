const express = require('express');

const router = express.Router();

const db = require('../models');

const completestock = require('../controllers/completestock.controller');

router.get('/test', async (req, res) => {
	try {
		res.json({ message: 'inside COMPLETESTOCK route API' });
	} catch (err) {
		console.log(err);
	}
});

//retrieve all stock whose value > 0.01 SR
router.get('/',  completestock.findAll);

// Retrieve by id
router.get('/material/:id', completestock.findOne);

//retrieve by matcode
router.get('/matcode/:code', completestock.findByCode)

//retreive sum of value by plant
router.get('/plant/sum', completestock.findTotalPlantwise)

module.exports = router;
