const { postModel } = require('../models/posts');

async function viewPost(query) {
	if (!query) {
		 posts = await postModel
			.find({})
			.sort({ createdAt: 'descending' });
		
	}
    else
    {
        posts=await postModel.findOne({ _id:query})
        if (!posts)
        {
            posts = { postBody :" could not find"};
        }
    }
    return posts;
}

module.exports = { viewPost };
