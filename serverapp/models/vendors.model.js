module.exports = (mongoose) => {
	const Vendor = mongoose.model(
		'vendors',
		mongoose.Schema(
			{
				'vendor-code': { type: String, required: true, unique: true },
				'vendor-name': { type: String, required: true },
				'created-date': { type: Date },
				'created-by': { type: String },
				'registration-number': { type: String },
				'vat-number': {type: String},
				'address': {
					'countrycode': {type: String, require: true},
					'city': {type: String},
					'district': {type: String},
					'postbox': {type: String},
					'zipcode': {type: String},
					'street': {type: String}
				},
				'contact': {
					'telephone1': {type: String},
					'telephone2': {type: String},
					'faxnumber': {type: String},
				},
				'salesperson': {
					'name': {type: String},
					'mobile': {type: String}
				},
				'matgroup': {type: String},
				'remarks': {type: String}
			},
			{ timestamps: true }
		),
		'vendors'
	);
	return Vendor;
};
