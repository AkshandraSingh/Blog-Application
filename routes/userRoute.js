const express = require('express')

const user = require('../controller/userController')
const userValidation = require('../validations/user/userValidator')
const { upload } = require('../middleware/userImageStorage')
const userAuthentication = require('../middleware/authToken');

const router = express.Router()

router.post('/createUser', userValidation.registerUser, user.createUser)
router.post('/loginUser', userValidation.loginUser, user.userLogin)
router.post('/sendMail', user.resetPasswordEmail)
router.post('/resetPassword/:id/:token', userValidation.resetUserPassword, user.resetUserPassword)
router.patch('/editProfile/:id', userAuthentication, upload.single('userProfilePic'), user.editProfile)
router.patch('/setNewPassword/:id', userAuthentication, user.setNewPassword)

module.exports = router
