const homeRoute=require('express').Router()
const { viewPost } = require('../controllers/viewPost');
const cookieParser = require('cookie-parser');
homeRoute.use(cookieParser());
homeRoute.get('/',async(req,res)=>{
    userDetails=req.cookies.userData
    if(!userDetails)
    {
        res.redirect('/login')
    }
    userName=userDetails.userName
    
    allPost = await viewPost();
    

    res.render('home',{userName,allPost})
})


module.exports={homeRoute}