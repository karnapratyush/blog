const mongoose = require('mongoose');

// importing schema
const Schema = mongoose.Schema;

//  defining schema

const commentSchema = new Schema(
	{
		userId: { type: Schema.ObjectId, required: true },
		comment: { type: String, required: true },
		postId: { type: Schema.ObjectId, required: true }
	},
	{ timestamps: true }
);

// assigning schema to a table named files. we can use model to add , remove data
const commentModel = mongoose.model('comment', commentSchema);

module.exports = { commentModel };
