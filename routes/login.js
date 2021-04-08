const loginRoute=require('express').Router()
const session = require('express-session');
const {verifyUser}=require('../controllers/loginVerify')

msg=""


loginRoute.get('/',(req,res)=>{
    
    console.log(req.session.userId);
    res.render('login',{msg})
})


loginRoute.post('/',async(req,res)=>{
    email=req.body.email;
    password=req.body.password;
    out=await verifyUser(email,password);
    if (out=="Email not found"|| out=="password Incorrect")
    {
        msg=out;
        res.redirect('/login')
    }
    else {
        msg="";
        
        res.redirect(`/home/${out._id}`)
    }

})

module.exports={
    loginRoute
}