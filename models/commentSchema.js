const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    comment: {
        type: String,
        required: true,
    },
    blogId: {
        type: mongoose.Types.ObjectId,
        ref: 'blog',
        required: true
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

commentSchema.set('timestamps', true)

module.exports = mongoose.model('comment', commentSchema)
