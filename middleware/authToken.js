const jwt = require('jsonwebtoken') 

const userAuthetication = async (req, res, next) => {
    const authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer')) {
        let token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) { 
                res.status(401).json({
                    success: false,
                    message: "User token is incorrect ." // ! It shows when token is incorrect .
                });
            } else {
                req.user = decoded.userData;
                next(); 
            }
        })
    } else {
        res.status(401).json({
            success: false,
            message: "Token Not Found" // ! It shows when token is not given .
        })
    }
}


module.exports = userAuthetication