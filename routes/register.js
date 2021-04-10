const registerRoute = require('express').Router();
const { addUser } = require('../controllers/addUser');
const bcrypt = require('bcrypt');
const { registerModel } = require('../models/register');

message="";
function clearMsg(req, res,next)
{
	next();
	message=""
}
// console.log("message:",message)
registerRoute.get('/', clearMsg,(req, res) => {
	console.log('message:', message);
	res.render('register',{message});
	
});

registerRoute.post('/', async (req, res) => {

	firstName = req.body.firstName;
	lastName=req.body.lastName;
	email = req.body.email;
	password = req.body.password;
	confirmPassword=req.body.confirmPassword;
	// console.log(password)
	// console.log(confirmPassword)

	let user = await registerModel.findOne({ email: email });
	if (confirmPassword!=password)
	{	message="Password doesnot match"
		res.redirect('/register');
	}

	
	else if (user)
	{
		message = "emailId already exist. Please try new emailId or login";
		res.redirect('/register');
	}
	else
	{

		let hashPassword=await bcrypt.hash(req.body.password, 10);


	let checkIfAdded = await addUser(firstName,lastName, email, hashPassword);
	if (checkIfAdded) {
		res.redirect('/login');
	} else {
		
		res.redirect('/register')
	}
}
});

module.exports = { registerRoute };
