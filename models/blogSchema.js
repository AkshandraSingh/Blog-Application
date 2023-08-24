const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    blogTopic: {
        type: String,
        required: true,
    },
    likedBy: {
        type: [],
        default: [],
    },
    blogDescription: {
        type: String,
        required: true,
    },
    blogLikes: {
        type: Number,
        default: 0
    },
    blogImage: {
        type: String,
        default: ""
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
        required: true
    },
    isActive: {
        type: String,
        default: true,
    }
})

blogSchema.set('timestamps', true)

module.exports = mongoose.model('blog', blogSchema)
