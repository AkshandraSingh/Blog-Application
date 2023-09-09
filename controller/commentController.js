const commentSchema = require('../models/commentSchema');
const commentLogger = require('../utils/commentLogger/commentLogger')

module.exports = {
    createComment: async (req, res) => {
        try {
            const commentData = new commentSchema(req.body);
            commentData.save();
            commentLogger.log('info', "Comment created successfully .")
            res.status(201).send({
                success: true,
                message: "Comment created successfully ."
            })
        }
        catch (error) {
            commentLogger.log('error', `Error: ${error.message}`)
            res.status(500).send({
                success: false,
                message: "Error",
                error: error
            })
        }
    },

    updateComment: async (req, res) => {
        try {
            const commentID = req.params.id;
            const commentData = await commentSchema.findByIdAndUpdate(commentID, req.body, {
                new: true,
            });
            commentLogger.log('info', "Your comment updated successfully .")
            res.status(200).send({
                success: true,
                message: 'Your comment updated successfully .'
            })
        }
        catch (error) {
            commentLogger.log('error', `Error: ${error.message}`)
            res.status(500).send({
                success: false,
                message: "Error",
                error: error.message
            })
        }
    },

    deleteComment: async (req, res) => {
        try {
            const commentID = req.params.id;
            const commentData = await commentSchema.findByIdAndDelete(commentID);
            commentLogger.log('info', "Your comment deleted successfully .")
            res.status(200).send({
                success: true,
                message: 'Your comment deleted successfully .'
            })
        }
        catch {
            commentLogger.log('error', `Error: ${error.message}`)
            res.status(500).send({
                success: false,
                message: "Error",
                error: error
            })
        }
    }
}
