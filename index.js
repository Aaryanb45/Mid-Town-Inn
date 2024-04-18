const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs')
const path = require('path');
const port = 3000
const app = express();
app.use(express.static('./public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req,res)=>{
    res.render('index')
})

app.get('/gallery', (req,res)=>{
    res.render('gallery')
})

app.get('/index', (req,res)=>{
    res.render('index')
})

app.get('/login_', (req,res)=>{
    res.render('login_')
})

app.get('/login', (req,res)=>{
    res.render('login')
})





app.listen(port, ()=>{
    console.log('Server at 3000')
})


