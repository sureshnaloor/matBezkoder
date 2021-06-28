const express = require('express');
const router = express.Router();
const completestock = require('../controllers/completestock.controller');

router.get('/test', async (_, res) => {
	try {
		res.json({ message: 'inside COMPLETESTOCK route API' });
	} catch (err) {
		console.log(err);
	}
});

//retrieve all stock whose value > 0.01 SR
router.get('/', completestock.findAll);

// Retrieve by id
router.get('/material/:id', completestock.findOne);

//retrieve by matcode
router.get('/matcode/:code', completestock.findByCode);

//retreive sum of value by plant
router.get('/plant/sum', completestock.findTotalPlantwise);

// retrieve top 20 material values
router.get('/top20', completestock.findTop20)

module.exports = router;
