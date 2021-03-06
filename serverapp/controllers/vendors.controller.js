const db = require('../models');
const Vendors = db.vendors;

// retireve single vendor
exports.findOne = (req, res) => {
	const id = req.params.id;

	Vendors.findById(id)
		.then((data) => {
			if (!data)
				res.status(404).send({ message: 'Not found vendor with id ' + id });
			else res.send(data);
		})
		.catch((err) => {
			res
				.status(500)
				.send({ message: 'Error retrieving vendor with id=' + id });
		});
};

// retrieve all vendors
exports.findAll = (req,res) => {
	const vendorName = req.query.vendorName;
	const vendorCode = req.query.vendorCode;

	const noRec = 100;
	
	// checks for either vendor name or vendor code entered as wildcard search string
	var condition = vendorName
		? {
				'vendor-name': {
					$regex: new RegExp(vendorName),
					$options: 'i',
				},
		  }
		: vendorCode
		? {
				'vendor-code': {
					$regex: new RegExp(vendorCode),
					$options: 'i',
				},
		  }
		: {};


	Vendors.find(condition).sort({'created-date':-1}).limit(noRec).then((data) => {
		if (!data){
			res.status(404).send({message: "not found any vendor, check connection"})}
		
		else res.status(200).send(data)
	})
	.catch((err) => {
		res
			.status(500)
			.send({ message: 'Error retrieving vendors' });
	});
}