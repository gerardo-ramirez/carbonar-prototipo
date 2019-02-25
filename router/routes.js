const express = require('express');
const route = express.Router();
route.get('/', (req,res)=>{
    res.render('index.ejs')

});
route.get('/empresa', (req,res)=>{
    res.render('/empresa.ejs');

});

route.get('/faqs', (req,res)=>{
    res.render('faqs.ejs')

});

route.get('/contacto', (req,res)=>{
    res.render('/contacto.ejs');

});
route.post('/contacto', (req,res)=>{

});


module.exports = route;