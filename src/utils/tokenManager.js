const jwt = require("jsonwebtoken");

// Genera el token para las peticiones, este solo queda en memoria
const generateToken = (uid) => {
    const expiresIn = 60 * 15;
    try {
        const token = jwt.sign({ uid }, process.env.JWT_SECRET, { expiresIn })
        return { token, expiresIn }
    } catch (error) {
        console.log(error);
    }
}

// Cada vez que se solicite el Refresh se entregara un token valido en memoria.
const generateRefreshToken = (uid, res) => {
    const expiresIn = 60 * 6 * 24 * 30 * 1000;
    try {
        const refreshToken = jwt.sign({ uid }, process.env.JWT_REFRESH, { expiresIn });
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: !(process.env.MODO === "developer"),
            expires: new Date(Date.now() + expiresIn)
        });
    } catch (error) {
        console.log(error)
    }
}

const tokenErrors = {
    "invalid signature": "La fimra del JWT no es valida",
    "jwt expired": "JWT expirado",
    "invalid token": "Token no valido",
    "No Bearer": "Utiliza formato Bearer",
    "JWT malformed": "JWT formato no válido"
}

module.exports = {
    generateToken,
    generateRefreshToken,
    tokenErrors
}