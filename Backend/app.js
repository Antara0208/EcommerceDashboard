const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();


// middleware()

dotenv.config({path :'./config.env'});

require('./db/conn');
app.use(express.json())
app.use(cors());
app.use(require('./router/auth'));

// const User = require('./model/userSchema');
const port = process.env.PORT;

const middleware = (req,res,next)=>{
    console.log('hellow my middleware');
    next();
}


app.get('/',(req,resp)=>{
    resp.send('hellow world from the server')
});
app.get('/about',(req,resp)=>{
    resp.send('hellow about world from the server')
});
app.get('/contact',(req,resp)=>{
    resp.send('hellow contact world from the server')
});
app.get('/signin',(req,resp)=>{
    resp.send('hellow signin world from the server')
});

app.listen(8000,() =>{
    console.log(`server is running ${port}`)
})

