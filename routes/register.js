const registerRoute = require('express').Router();
const { addUser } = require('../controllers/addUser');

registerRoute.get('/', (req, res) => {
	res.render('register');
});

registerRoute.post('/register', async(req, res) => {
	username = req.body.username;
	email = req.body.email;
	password = req.body.password;
	let checkIfAdded = await addUser(username, email, password);
	if (checkIfAdded) {
        res.redirect('/login')
	}
    else {
        res.send("there was an error")
    }
});


module.exports={registerRoute}