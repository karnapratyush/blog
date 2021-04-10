const express=require('express');
const app=express();
const session = require('express-session');
const {registerRoute}=require('./routes/register')
const {loginRoute}=require('./routes/login')
const {homeRoute}=require('./routes/homeRoute')
const { postsRoute }=require('./routes/postsRoute');
const { commentRoute }=require('./routes/comment');
const cookieParser = require('cookie-parser');


app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine','hbs')


app.use('/public', express.static(__dirname + '/public'));

const { connectDB } = require('./db/db');
connectDB();

app.use('/home/',homeRoute)

app.use('/',registerRoute)
app.use('/login',loginRoute)

app.use('/posts',postsRoute)
app.use('/addComment',commentRoute)

app.get('/logout',(req,res)=>{
    userDetails = req.cookies.userData;
	if (!userDetails) {
		res.redirect('/login');
	}
    res.clearCookie('userData');
    res.redirect('/login')
})



app.listen('5555',()=>{
    console.log("http://localhost:5555")
})