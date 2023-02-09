const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.t7rtuzp.mongodb.net/ChatApp?retryWrites=true&w=majority`,()=>{
    console.log('connected to Atlas DB')
})
