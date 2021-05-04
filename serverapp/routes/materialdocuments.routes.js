const express = require('express');
const router = express.Router();
const materialdocuments = require('../controllers/materialdocuments.controller');

router.get('/test', async (_, res) => {
	try {
		res.json({ message: 'inside MATERIALDOCUMENTS route API' });
	} catch (err) {
		console.log(err);
	}
});

// Retrieve a single doc by id
router.get('/matdoc/:id', materialdocuments.findOne);

// Retrieve material documents by mat code (or) material text - mvt type 101 only
router.get('/material', materialdocuments.findByMat);

// Retrieve material documents by mat code and movement type all
router.get('/material/all', materialdocuments.findByMatAll);

// Retreive all material documents for a given account assignment/cost element - sale order, network, wbs or cost center
router.get('/accounts', materialdocuments.findByAccount);

module.exports = router;
