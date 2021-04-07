const express=require('express');
const app=express();
const {registerRoute}=require('./routes/register')
const {loginRoute}=require('./routes/login')
const {homeRoute}=require('./routes/homeRoute')
const { postsRoute }=require('./routes/postsRoute');
const { commentRoute }=require('./routes/comment');
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine','hbs')

const { connectDB } = require('./db/db');
connectDB();

app.use('/home/',homeRoute)

app.use('/',registerRoute)
app.use('/login',loginRoute)

app.use('/posts',postsRoute)
app.use('/addComment',commentRoute)



app.listen('5555',()=>{
    console.log("http://localhost:5555")
})