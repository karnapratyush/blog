const loginRoute=require('express').Router()
const {verifyUser}=require('../controllers/loginVerify')
const cookieParser = require('cookie-parser');
loginRoute.use(cookieParser());


msg=""

function clearMsg(req,res,next)
{
    next()
    msg=""
}


loginRoute.get('/',clearMsg,(req,res)=>{
    
    // console.log(req.session.userId);
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
        store={}
        store.id=out._id;
        store.userName=out.firstName+' '+out.lastName;
        res.cookie('userData',store)
        
        res.redirect(`/`)
    }

})

module.exports={
    loginRoute
}