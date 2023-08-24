require('dotenv').config()
const express = require('express')

require('./config/modelConfig')
const mainRouter = require('./routes/mainRoute')
const logger = require('./utils/logger')

const app = express()
app.use(express.json())
app.use('/',mainRouter)

const HOST = "localhost";
const PORT = process.env.PORT || 8000
const serverLink = `Server Started on http://${HOST}:${PORT}`

app.listen(PORT,()=>{
    console.log("Server is running on port: ",PORT)
    logger.log("info",serverLink)
})

module.exports = app
