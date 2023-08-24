const joi = require('joi')

const commentSchema = {
    createComment: joi.object({
        comment: joi
            .string()
            .max(120)
            .min(2)
            .message({
                "string-min": "{#lable} should be at least {#limit} characters",
                "string-man": "{#lable} should be at least {#limit} characters",
            })
            .required()
    }).unknown(true),
}

module.exports = commentSchema
