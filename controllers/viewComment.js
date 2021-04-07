const { commentModel } = require('../models/comments');

async function viewComment(query) {
	const allComments = commentModel
		.find({ postId: query })
		.sort({ createdAt: 'descending' });
	

    return allComments
}

module.exports = { viewComment };
