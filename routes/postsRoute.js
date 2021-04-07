const postsRoute=require('express').Router()
const {addPost}=require('../controllers/addPost')
const {viewPost}=require('../controllers/viewPost')
const { registerModel } = require('../models/register');
const mongoose=require('mongoose');
const {viewComment}=require('../controllers/viewComment')



postsRoute.get('/:id',async(req,res)=>{
    id=req.params.id
    // console.log(id)
    let user = await registerModel.findOne({_id:id });
    // console.log(user)
    user.ref=`/posts/${user._id}`
    
    


    res.render('AddPost',{user})
})

postsRoute.post('/:id',async(req,res)=>{
    // console.log(req.params.id)
    title=req.body.title;
    userId=req.params.id;
    userId = mongoose.Types.ObjectId(userId);
    postBody=req.body.blogBody;
    // console.log(title,userId,postBody)
    await addPost(title, postBody, userId);
    
    res.redirect(`/home/${userId}`)

})
postsRoute.get('/:id/:postID',async(req,res)=>{
    console.log(req.params)
    singlePost= await viewPost(req.params.postID)
    let user = await registerModel.findOne({ _id: req.params.id });
    // let allComments=await viewComment(req.params.postID)
    let userId=req.params.id;
    let postId=req.params.postID
    let allComments=await  viewComment(postId)
    console.log(allComments[0].userId)
    for (let i =0;i<allComments.length;i++)
    {
        let user=await registerModel.findOne({_id:allComments[i].userId})
        console.log(user)
        allComments[i].userName=user.username
    }
    res.render('viewaPost',{singlePost,user,userId,postId,allComments})
})

module.exports={postsRoute};



