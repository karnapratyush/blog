const { commentModel }=require('../models/comments')

async function addComment(userId, comment, postId,userName) {
	const newPost = new commentModel({
		userId,
		userName,
        comment,
        postId
	});
	await newPost.save();
}


module.exports={addComment}