const db = require('../models');
const Purchaseorders = db.purchaseorders;

// retireve single material
exports.findOne = (req, res) => {
	const id = req.params.id;

	Purchaseorders.findById(id)
		.then((data) => {
			if (!data)
				res.status(404).send({ message: 'Not found purchaseorder with id ' + id });
			else res.send(data);
		})
		.catch((err) => {
			res
				.status(500)
				.send({ message: 'Error retrieving purchase order with id=' + id });
		});
};

// retireve all purchase orders search by matcode or description
exports.findAll = (req, res) => {
	const noRec = 100;
	const description = req.query.description;
	const matcode = req.query.matcode;

	var condition = description
		? {
				'material.short-text': {
					$regex: new RegExp(description),
					$options: 'i',
				}
		  }
		: matcode
		? {
				'material.material-code': {
					$regex: new RegExp(matcode),
					$options: 'i',
				}
		  }
		: {}

	Purchaseorders.find(condition).limit(noRec)
		.then((data) => {
			if (!data)
				res.status(404).send({ message: 'Not found any purchase orders '  });
			else res.send(data);
		})
		.catch((err) => {
			res
				.status(500)
				.send({ message: 'Error retrieving purchase orders' });
		});
};


// search/retrieve through single PO number

exports.findByNum = (req,res) => {
	const ponum = req.query.ponum;

	Purchaseorders.find({'po-number': ponum}).then(data=> {
			if (!data)
				res.status(404).send({ message: 'Not found any purchase orders '  });
			else res.send(data);
	}).catch((err) => {
		res
			.status(500)
			.send({ message: 'Error retrieving purchase orders' });
	});

}

// search by vendor- code or name

exports.findByVendor = (req, res) => {
	const noRec = 100;
	const vencode = req.query.vencode;
	const vendorname = req.query.vendorname;

	var condition = vencode
		? {
				'vendor-code': {
					$regex: new RegExp(vencode),
					$options: 'i',
				}
		  }
		: vendorname
		? {
				'vendor-name': {
					$regex: new RegExp(vendorname),
					$options: 'i',
				}
		  }
		: {}

	Purchaseorders.find(condition).limit(noRec)
		.then((data) => {
			if (!data)
				res.status(404).send({ message: 'Not found any purchase orders '  });
			else res.send(data);
		})
		.catch((err) => {
			res
				.status(500)
				.send({ message: 'Error retrieving purchase orders' });
		});
};

// search by date- code or name

exports.findByDate = (req, res) => {
	const noRec = 100;
	const yearreq = req.query.yearreq;
	
	var condition = yearreq
		? {
			"po-date":{"$gte": new Date(`${yearreq}-01-01T00:00:00.000Z`), "$lte": new Date(`${yearreq}-12-31T00:00:00.000Z`)}
				
		  }
		:  {}

	Purchaseorders.find(condition).limit(noRec)
		.then((data) => {
			if (!data)
				res.status(404).send({ message: 'Not found any purchase orders '  });
			else res.send(data);
		})
		.catch((err) => {
			res
				.status(500)
				.send({ message: 'Error retrieving purchase orders' });
		});
};

// search PO of any account/cost element- costcenter, wbs/network, salesdocument or order

exports.findByAccount= (req, res) => {
	const noRec = 100;

	const costcenter= req.query.costcenter;
	const wbs = req.query.wbs;
	const network = req.query.network;
	const salesdoc = req.query.salesdoc;
	const order = req.query.order

	var condition = costcenter
		? {
				'account.cost-center': {
					$regex: new RegExp(costcenter),
					$options: 'i',
				}
		  }
		: wbs
		? {
				'account.wbs': {
					$regex: new RegExp(wbs),
					$options: 'i',
				}
		  } : network
		  ? {
			'account.network': {
				$regex: new RegExp(network),
				$options: 'i',
			}
	  } : salesdoc? {
		'account.sales-document': {
			$regex: new RegExp(salesdoc),
			$options: 'i',
		}
  } : order ? {
	'account.order': {
		$regex: new RegExp(order),
		$options: 'i',
	}
} : {}

	Purchaseorders.find(condition).limit(noRec)
		.then((data) => {
			if (!data)
				res.status(404).send({ message: 'Not found any purchase orders '  });
			else res.send(data);
		})
		.catch((err) => {
			res
				.status(500)
				.send({ message: 'Error retrieving purchase orders' });
		});
};