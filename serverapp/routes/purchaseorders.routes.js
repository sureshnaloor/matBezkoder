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

// Retrieve all purchaseorders through matcode or matdescription - if both null then all 
router.get('/', purchaseorders.findAll);

// single purchase order by id
router.get('/purchase/:id', purchaseorders.findOne)

// single PO from PO number 
router.get('/purchase', purchaseorders.findByNum)

// retrieve PO list through vencode or vendor name search - if both null then all 
router.get('/vendor', purchaseorders.findByVendor)

// retrieve PO list through account- cost element search 
router.get('/account', purchaseorders.findByAccount)

// retrieve PO's during a specific year
router.get('/date', purchaseorders.findByDate)

module.exports = router;
