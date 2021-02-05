module.exports = (mongoose) => {
	const SpecialStk = mongoose.model(
		'specialstock',
		mongoose.Schema(
			{
				'material-code': { type: String },
				'plant-code': { type: String, required: true },
				'stk-indicator': { type: String },
				'sales-document': { type: String },
				'sales-document-no': { type: String },
				'wbs-element': { type: String },
				'stock-qty': { type: Number},
				'unit-of-measure': { type: String },
				'stock-val': { type: Number},
			},
			{ timestamps: true }
		),
		'specialstock'
	);
	return SpecialStk;
};
