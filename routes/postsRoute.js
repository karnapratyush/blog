const postsRoute=require('express').Router()
const {addPost}=require('../controllers/addPost')
const {viewPost}=require('../controllers/viewPost')
const { registerModel } = require('../models/register');
const mongoose=require('mongoose');
const {viewComment}=require('../controllers/viewComment')
const cookieParser = require('cookie-parser');

postsRoute.use(cookieParser());

postsRoute.get('/',async(req,res)=>{
    userDetails = req.cookies.userData;
	if (!userDetails) {
		res.redirect('/login');
	}
    
	userName = userDetails.userName;
    id=userDetails.id
    // console.log(id)
    // let user = await registerModel.findOne({_id:id });
    // console.log(user)
    // user.ref=`/posts/${user._id}`
    
    


    res.render('AddPost',{userName})
})

postsRoute.post('/',async(req,res)=>{

    userDetails = req.cookies.userData;
	if (!userDetails) {
		res.redirect('/login');
	}
    
    title=req.body.title;
    userId = mongoose.Types.ObjectId(userDetails.id);
    postBody=req.body.blogBody;
    // console.log(title,userId,postBody)
    await addPost(title, postBody, userId,userDetails.userName);
    
    res.redirect(`/`)

})
postsRoute.get('/:postID',async(req,res)=>{

    userDetails = req.cookies.userData;
	if (!userDetails) {
		res.redirect('/login');
	}
    let postId = req.params.postID;
    // console.log(req.params)
    singlePost= await viewPost(postId)
    if (!singlePost)
    {
        res.send('Cannot find Post')
    }
    userName=userDetails.userName
    
    
    
    
    let allComments=await viewComment(postId)
    
    
    res.render('viewaPost',{singlePost,userName,postId,allComments})
})

module.exports={postsRoute};



