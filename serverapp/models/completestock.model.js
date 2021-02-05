module.exports = (mongoose) => {
	const CompleteStk = mongoose.model(
		'completestock',
		mongoose.Schema(
			{
				'material-code': { type: String },
				'plant-code': { type: String, required: true },
				'receipt-qty': {type: Number},
				'issue-qty': {type: Number},
				'current-stkqty': { type: Number},
				'unit-of-measure': { type: String },
				'receipt-val': { type: Number},
				'issue-val': {type: Number},
				'current-stkval': {type: Number}
			},
			{ timestamps: true }
		),
		'completestock'
	);
	return CompleteStk;
};
