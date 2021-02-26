module.exports = (mongoose) => {
	const MatDocuments = mongoose.model(
		'materialdocuments',
		mongoose.Schema(
			{
				'material-code': { type: String },
				'plant-code': { type: String, required: true },
				'sloc': {type: String},
				'mvt-type': {type: String},
				'special-stk-flag': {type: String},
				'document-number': {type: String},
				'document-itemno': {type: String},
				'document-date': { type: Date },
				'doc-qty': { type: Number },
				'unit-of-measure': { type: String },
				'document-amount': {type: Number},
				'material-text': {type: String},
				'account': {
					'sale-order': {type: String},
					'cost-center': {type: String},
					'network': {type: String},
					'wbs-element': {type: String}
				}
			},
			{ timestamps: true }
		),
		'materialdocuments'
	);
	return MatDocuments;
};
