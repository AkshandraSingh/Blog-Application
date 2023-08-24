const blogSchema = require('./blogValidationSchema')

module.exports = {
    createBlog: async (req, res, next) => {
        const value = await blogSchema.createBlog.validate(req.body, { abortEarly: false })
        if (value.error) {
            return res.status(403).json({
                sucess: false,
                message: value.error.details[0].message
            })
        } else {
            next()
        }
    },
}
