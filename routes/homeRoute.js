const homeRoute=require('express').Router()
const { registerModel } = require('../models/register');
const { viewPost } = require('../controllers/viewPost');

homeRoute.get('/:id',async(req,res)=>{
    userName=await registerModel.findOne({_id:req.params.id})
    console.log(userName)
    userName.ref=`/posts/${userName._id}`
    allPost = await viewPost();
    console.log(allPost)

    res.render('home',{userName,allPost})
})


module.exports={homeRoute}