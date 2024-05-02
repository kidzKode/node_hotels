const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const Person = require('./models/person')
const menuItems = require('./models/Menuitems');

app.get('/', function(req,res){
    res.send('Welcome to the Ravi hotel')
})

//import router files
const personRoutes = require('./routes/personRoutes')
app.use('/person',personRoutes);

const menuRoutes = require('./routes/MenuRoutes')
app.use('/menuitems',menuRoutes);



app.listen(3000);