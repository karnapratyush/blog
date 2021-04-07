const { registerModel } = require('../models/register');

async function verifyUser(email,password)
{
    let user=await registerModel.findOne({email:email})
    if (!user)
    return "Email not found";
    else {
        if (password==user.password)
        return user;
    }
    return "password Incorrect";

}



module.exports={verifyUser};