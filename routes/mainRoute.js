const express = require('express');

const userRoute = require('../routes/userRoute')
const blogRoute = require('../routes/blogRoute')
const commentRoute = require('../routes/commentRoute')

const commanRouter = express.Router();

commanRouter.use('/user', userRoute)
commanRouter.use('/blog',blogRoute)
commanRouter.use('/comment',commentRoute)

module.exports = commanRouter
