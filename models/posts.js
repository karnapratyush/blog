const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//  defining schema
postTitle= { type: String, required: true }
postBody= { type: String, required: true }
userId= { type: Schema.ObjectId, required: true }


const postSchema = new Schema(
	{	
		postTitle,
		postBody,
		userId,

		
		
		
	},
	{ timestamps: true }
);

// assigning schema to a table named files. we can use model to add , remove data
const postModel = mongoose.model('post', postSchema);

module.exports = { postModel };
