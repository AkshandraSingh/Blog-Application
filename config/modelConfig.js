const mongoose = require('mongoose')

const logger = require('../utils/logger')

mongoose.connect(process.env.URL,{
    useNewUrlParser: true
})

mongoose.connection.on('error',(error)=>{
    console.log("Mongoose Connection Error!")
    console.log("Error: ",error)
    logger.log('error',`Error: ${error}`)
})

mongoose.connection.on('connected',()=>{
    console.log("MongoDb is connected")
    logger.log('info',"mongoDb connected")
})