const jwt = require("jsonwebtoken");
const { tokenErrors } = require("../utils/tokenManager.js");

const requireToken = (req, res, next) => {
    try {
        let token = req.headers?.authorization;
        if (!token) throw new Error('No Bearer');

        // [0] = Bearer
        token = token.split(" ")[1]
        const { uid } = jwt.verify(token, process.env.JWT_SECRET);
        req.uid = uid;

        next();
    } catch (error) {
        console.log(error.message);
        return res.status(401).send({ error: tokenErrors[error.message] })
    }
}

module.exports = requireToken