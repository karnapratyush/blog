const commentRoute=require('express').Router()
const {addComment}=require('../controllers/addComment')
const cookieParser = require('cookie-parser');
commentRoute.use(cookieParser());
const mongoose = require('mongoose');

commentRoute.post('/:postId',async(req,res)=>{
    userDetails = req.cookies.userData;
	if (!userDetails) {
		res.send('cannot add comment');
	}
    userId = mongoose.Types.ObjectId(userDetails.id);
    await addComment(userId,req.body.comment,req.params.postId,userDetails.userName)

    res.redirect(`/posts/${req.params.postId}`);
})

module.exports={commentRoute}