//this file is used to set connection with the database
const mongoose= require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

//name of the db is products-api
//mongoose.connect('mongodb://127.0.0.1/covid19-api');
mongoose.connect('mongodb+srv://ajayagrawal:Ajay123@hospital-api.lrnmavy.mongodb.net/?retryWrites=true&w=majority')

const db=mongoose.connection;
//for error
 db.on('error', console.error.bind(console,"ERROR CONNECTING TO DATABASE!!"));

 //on success
 db.once('open', ()=>{
     console.log("Conncted to database");
 });

 module.exports=db;