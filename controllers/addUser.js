const {registerModel}=require('../models/register')

async function addUser(firstName,lastName,email,password)
{
    const userExist=await registerModel.findOne({email:email})
    if(userExist)
    {
        return 0;
    }
     const newUser= new registerModel({
            firstName,
            lastName,
            email,
            password
        })
         await newUser.save();
         return newUser;
}

module.exports={addUser}


