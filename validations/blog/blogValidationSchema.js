const joi = require('joi')
const { joiPasswordExtendCore } = require('joi-password');
const joiPassword = joi.extend(joiPasswordExtendCore);

const blogSchema = {
    createBlog: joi.object({
        blogTopic: joi
            .string()
            .max(20)
            .min(3)
            .message({
                "string-min": "{#lable} should be at least {#limit} characters",
                "string-man": "{#lable} should be at least {#limit} characters",
            })
            .required(),
        blogDescription: joi
            .string()
            .max(750)
            .min(20)
            .message({
                "string-min": "{#lable} should be at least {#limit} characters",
                "string-man": "{#lable} should be at least {#limit} characters",
            })
            .required(),
    }).unknown(true),
}

module.exports = blogSchema
