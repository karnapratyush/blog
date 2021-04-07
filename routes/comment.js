const commentRoute=require('express').Router()
const {addComment}=require('../controllers/addComment')

commentRoute.post('/:userId/:postId',async(req,res)=>{
    const comment=await addComment(req.params.userId,req.body.comment,req.params.postId)

    res.redirect(`/posts/${req.params.userId}/${req.params.postId}`);
})

module.exports={commentRoute}