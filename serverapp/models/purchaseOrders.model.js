module.exports = (mongoose) => {
	const PurchaseOrder = mongoose.model(
		'purchaseorderss',
		mongoose.Schema(
			{
				'po-number': { type: String, required: true, unique: true },
				'po-line-item': { type: String, required: true },
				'po-date': { type: Date },				
				'vendor-code': { type: String },
				'vendor-name': {type: String},
				'account': {
					'cost-center':{type: String},
					'wbs-element': {type: String},
					'order': {type: String},
					'asset':{type: String},
					'asset-subno': {type: String},
					'sales-document': {type: String},
					'sales-document-subno': {type: String},
					'network': {type: String}
				},
				'material': {
					'material-code': {type: String},
					'short-text': {type: String},
					'mat-group': {type: String}
				},
				'deletion-flag': {type: String},
				'plant-code': {type: String},
				'po-qty': {type: Number},
				'po-uom': {type: String},
				'po-price': {type: Number},
				'po-currency': {type: String},
			},
			{ timestamps: true }
		),
		'purchaseorders'
	);
	return PurchaseOrder;
};
