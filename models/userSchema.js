const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    userPassword: {
        type: String,
        required: true
    },
    pastPasswords: {
        type: [],
        default: [],
    },
    userPhone: {
        type: Number,
        required: true
    },
    userGender: {
        type: String,
        required: true
    },
    userProfilePic: {
        type: String,
        default: ""
    },
    isActive: {
        type: String,
        default: true
    }
})

userSchema.set('timestamps', true) 

module.exports = mongoose.model('user',userSchema)
