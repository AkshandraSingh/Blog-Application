const express = require('express')

const user = require('../controller/userController')
const userValidation = require('../validations/user/userValidator')
const { upload } = require('../middleware/userImageStroge')

const router = express.Router()

router.post('/createUser', userValidation.registerUser, user.createUser)
router.post('/loginUser', userValidation.loginUser, user.userLogin)
router.post('/sendMail', user.resetPasswordEmail)
router.post('/resetPassword/:id/:token', userValidation.resetUserPassword, user.resetUserPassword)
router.patch('/editProfile/:id', upload.single('userProfilePic'),user.editProfile)
router.patch('/setNewPassword/:id', user.setNewPassword)

module.exports = router
