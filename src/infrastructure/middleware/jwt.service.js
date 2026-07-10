const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    const token = req.header('x-auth-token')
    if(!token){
        return res.status(400).json({msg: "no hay token"})
    }
    try {
        const hash = jwt.verify(token, process.env.SECRET_KEY);
        req.user = hash.user;
        next();
    } catch (error) {
        res.status(401).json({msg: "error en autenticaion de token"})
    }
}