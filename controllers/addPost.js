const { postModel } = require('../models/posts');

async function addPost(postTitle,postBody,userId) {
	
	const newPost = new postModel({
		postTitle,
		postBody,
        userId
		
	});
	await newPost.save();
}

// async function test()
// {
//     await addPost('a', 'b', '606cbe4d4dee4639302460c4');
// }
// test()

module.exports = { addPost };
