const jwt = require("jsonwebtoken");
const { tokenErrors } = require("../utils/tokenManager.js");

const requireRefreshToken = (req, res, next) => {
    try {
        const refreshTokenCookie = req.cookies.refreshToken;
        if (!refreshTokenCookie) throw new Error('No existe el token');

        const { uid } = jwt.verify(refreshTokenCookie, process.env.JWT_REFRESH);
        req.uid = uid;
        next();
    } catch (error) {
        console.log(error.message)
        return res.status(401).json({ error: tokenErrors[error.message] })
    }
}

module.exports = requireRefreshToken