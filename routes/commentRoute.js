const express = require('express')

const userAuthetication = require('../middleware/authToken');
const comment = require('../controller/commentController')
const commentValidator = require('../validations/comment/commentValidator')

const router = express.Router()

router.post('/createComment', userAuthetication, commentValidator.createComment,comment.createComment)
router.patch('/updateComment/:id', userAuthetication, comment.updateComment)
router.delete('/deleteComment/:id', userAuthetication, comment.deleteComment)

module.exports = router
