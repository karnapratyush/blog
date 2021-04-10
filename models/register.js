const mongoose = require('mongoose');

// importing schema
const Schema = mongoose.Schema;

//  defining schema

const registerSchema = new Schema(
	{
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		email: { type: String, required: true },
		password: { type: String, required: true }
	},
	{ timestamps: true }
);

// assigning schema to a table named files. we can use model to add , remove data
const registerModel = mongoose.model('authentication', registerSchema);

module.exports = { registerModel };
