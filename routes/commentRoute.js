const express = require('express')

const userAuthentication = require('../middleware/authToken');
const comment = require('../controller/commentController')
const commentValidator = require('../validations/comment/commentValidator')

const router = express.Router()

router.post('/createComment', userAuthentication, commentValidator.createComment, comment.createComment)
router.patch('/updateComment/:id', userAuthentication, comment.updateComment)
router.delete('/deleteComment/:id', userAuthentication, comment.deleteComment)

module.exports = router
