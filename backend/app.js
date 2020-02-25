const express = require('express')
const app = express()
const mongoose = require('mongoose')
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/auth', require('./routes/router'))
app.use(express.json({extended: true}))


async function start(){
    try{
       await mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false',{
           useNewUrlParser: true,
           useUnifiedTopology: true,
           useCreateIndex: true,
       } )
       app.listen(5000, ()=>{
            console.log('Node server is runing!')
       })
    }

    catch(e){
        console.log(e.massage)
        process.exit(1)
    }
}

start()

