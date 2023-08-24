const userSchema = require('./userValidationSchema')

module.exports = {
    registerUser: async (req, res, next) => {
        const value = await userSchema.registerUser.validate(req.body, { abortEarly: false })
        if (value.error) {
            return res.status(403).json({
                sucess: false,
                message: value.error.details[0].message
            })
        } else {
            next()
        }
    },
    loginUser: async (req, res, next) => {
        const value = await userSchema.loginUser.validate(req.body, { abortEarly: false })
        if (value.error) {
            return res.status(403).json({
                sucess: false,
                message: value.error.details[0].message
            })
        } else {
            next()
        }
    },
    resetUserPassword: async (req, res, next) => {
        const value = await userSchema.resetUserPassword.validate(req.body, { abortEarly: false })
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
