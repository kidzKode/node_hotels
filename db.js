const mongoose = require('mongoose');

//define the mongoDB connetion url
const mongoURL = 'mongodb://localhost:27017/hotels' //in the place of hotel ant table name you can write

//set up mongoDb connection

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
//get the default connection
//mongoose maintains a default connection object represetning the mongoDv connection
const db = mongoose.connection;

db.on('conneted',()=>{
    console.log('connected to mongoDB server');
})

db.on('error',(err)=>{
    console.log('mongoDB connection error',err);
})

db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
});

//export. the databse connection

module.exports.db;