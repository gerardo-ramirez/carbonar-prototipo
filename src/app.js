const express = require('express');
const app = express();
const path = require('path');
const root = require('./../router/routes');

//setting
app.set('port', process.env.PORT || 8080);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './../views'));

//static file
app.use(express.static(path.join(__dirname, './../public')));

//router
app.use(root);



//listen
app.listen(app.get('port'),()=>{
console.log('listen on port');
});
