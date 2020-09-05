const express = require('express');

const router = express.Router();

const materials = require('../controllers/material.controller');
const upload = require('../../middleware/upload');

router.get('/test', async (req, res) => {
	try {
		res.json({ message: 'inside materials route API' });
	} catch (err) {
		console.log(err);
	}
});

// Create a new material
router.post('/', upload.single('prodImage'), materials.create);

// Retrieve all Materials
router.get('/', materials.findAll);

// retrieve all materials by materialgroup
router.get('/mg/:matgroup', materials.findbyGroup);

// Retrieve a single Material with id
router.get('/:id', materials.findOne);

// Update a Tutorial with id
router.put('/:id', upload.single('prodImage'), materials.update);

// Delete a Tutorial with id
router.delete('/:id', materials.delete);

module.exports = router;
