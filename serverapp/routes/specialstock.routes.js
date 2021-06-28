const express = require('express');
const router = express.Router();
const specialstock = require('../controllers/specialstock.controller');

router.get('/test', async (_, res) => {
	try {
		res.json({ message: 'inside SPECIALSTOCK route API' });
	} catch (err) {
		console.log(err);
	}
});

// Retrieve all stock whose value is > 1
router.get('/', specialstock.findEach);

// retrieve by id
router.get('/material/:id', specialstock.findOne);

// retreive by matcode
router.get('/matcode/:code', specialstock.findByCode);

//retreive sum of value by plant
router.get('/plant/sum', specialstock.findTotalPlantwise);

// //retrieve sum of values by wbs
router.get('/wbs/sum', specialstock.findTotalWbswise);

router.get('/stockindicator/sum', specialstock.specialStockwise)

// retrieve sum of valules by order
router.get('/order/sum', specialstock.findTotalOrderwise);

//retrieve through salesdoc or wbs
router.get('/account', specialstock.findByAccount);

module.exports = router;
