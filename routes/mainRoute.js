const express = require('express');

const userRoute = require('../routes/userRoute')
const blogRoute = require('../routes/blogRoute')
const commentRoute = require('../routes/commentRoute')

const commonRouter = express.Router();

commonRouter.use('/user', userRoute)
commonRouter.use('/blog',blogRoute)
commonRouter.use('/comment',commentRoute)

module.exports = commonRouter
