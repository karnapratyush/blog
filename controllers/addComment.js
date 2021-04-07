const { commentModel }=require('../models/comments')

async function addComment(userId, comment, postId) {
	const newPost = new commentModel({
		userId,
        comment,
        postId
	});
	await newPost.save();
}


module.exports={addComment}