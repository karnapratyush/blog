const registerRoute = require('express').Router();
const { addUser } = require('../controllers/addUser');
const session = require('express-session');
registerRoute.use(
	session({
		resave: true,
		saveUninitialized: true,
		secret: '23wsxwd3edc3rf33efr43'
	})
);

registerRoute.get('/', (req, res) => {
	res.render('register');

});

registerRoute.post('/register', async(req, res) => {
	username = req.body.username;
	email = req.body.email;
	password = req.body.password;
	let checkIfAdded = await addUser(username, email, password);
	if (checkIfAdded) {
		 req.session.userId = checkIfAdded._id;
		 req.session.username=checkIfAdded.username;
		 req.session.email=checkIfAdded.email;
        res.redirect('/login')
	}
    else {
        res.send("there was an error")
    }
});


module.exports={registerRoute}