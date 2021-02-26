const db = require('../models');
const Materialdocuments = db.materialdocuments;

// retireve single material
exports.findOne = (req, res) => {
	const id = req.params.id;

	Materialdocuments.findById(id)
		.then((data) => {
			if (!data)
				res.status(404).send({ message: 'Not found material docs with id ' + id });
			else res.send(data);
		})
		.catch((err) => {
			res
				.status(500)
				.send({ message: 'Error retrieving material docs with id=' + id });
		});
};

exports.findByMat = (req,res) => {
	const description = req.query.description;
	const matcode = req.query.matcode;

	const noRec = 100;

	var condition = description
		? {
				'material-text': {
					$regex: new RegExp(description),
					$options: 'i',
				}, 'mvt-type': '101'
		  }
		: matcode
		? {
				'material-code': {
					$regex: new RegExp(matcode),
					$options: 'i',
				},'mvt-type': '101'
		  }
		: {'mvt-type': '101'};
	
		Materialdocuments.find(condition).limit(noRec).then((data) => {
			if (!data){
				res.status(404).send({message: "not found any document, check connection"})}
			
			else res.status(200).send(data)
		})
		.catch((err) => {
			res
				.status(500)
				.send({ message: 'Error retrieving documents' });
		});	

}

exports.findByMatAll = (req,res) => {
	const description = req.query.description;
	const matcode = req.query.matcode;

	const noRec = 100;

	var condition = description
		? {
				'material-text': {
					$regex: new RegExp(description),
					$options: 'i',
				}
		  }
		: matcode
		? {
				'material-code': {
					$regex: new RegExp(matcode),
					$options: 'i',
				}
		  }
		: {}
	
		Materialdocuments.find(condition).limit(noRec).then((data) => {
			if (!data){
				res.status(404).send({message: "not found any document, check connection"})}
			
			else res.status(200).send(data)
		})
		.catch((err) => {
			res
				.status(500)
				.send({ message: 'Error retrieving documents' });
		});	

}

exports.findByAccount = (req,res) => {
	const saleorder = req.query.saleorder;
	const costcenter = req.query.costcenter;
	const network = req.query.network;
	const wbsnumber = req.query.wbsnumber;

	const noRec = 100;

	var condition = saleorder
		? {
				'account.sale-order': {
					$regex: new RegExp(saleorder),
					$options: 'i',
				}
		  }
		  : costcenter ?  {
			'account.cost-center': {
				$regex: new RegExp(costcenter),
				$options: 'i',
			}
	  	   } : network ? {
			'account.network': {
				$regex: new RegExp(network),
				$options: 'i',
			}
 		 } : wbsnumber ? {
			'account.wbs-element': {
				$regex: new RegExp(wbsnumber),
				$options: 'i',
			}
		}
			: {}
	
		Materialdocuments.find(condition).limit(noRec).then((data) => {
			if (!data){
				res.status(404).send({message: "not found any document, check connection"})}
			
			else res.status(200).send(data)
		})
		.catch((err) => {
			res
				.status(500)
				.send({ message: 'Error retrieving documents' });
		});	

}
