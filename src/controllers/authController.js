const usuarioService = require("../services/usuarioService.js");
const { generateToken, generateRefreshToken, tokenErrors } = require("../utils/tokenManager.js");

const register = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Respuesta de guardar el usuario en la bd
        const createNewUsuario = await usuarioService.createNewUsuario(email, password);
        // Si el type = true, entonces el guardado fue exitoso
        if (!createNewUsuario.type || createNewUsuario.type === undefined) {
            return res.status(400).json(createNewUsuario);
        }
        generateRefreshToken()
        return res.status(201).json(createNewUsuario);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ Error: "Error en servidor" })
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const usuario = await usuarioService.login(email, password);
        // comprobamos las validaciones desde service
        if (usuario.status) {
            return res.status(403).json(usuario)
        }
        // generar JWT
        const { token, expiresIn } = generateToken(usuario.id);
        generateRefreshToken(usuario.id, res);

        return res.status(201).json({ token, expiresIn });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ Error: "Error en servidor" });
    }
}

const refreshToken = (req, res) => {
    try {
        const { token, expiresIn } = generateToken(req.uid);
        return res.status(201).json({ token, expiresIn });

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ Error: "Error en servidor" });
    }

}

const logout = (req, res) => {
    res.clearCookie('refreshToken');
    res.json({ok:true});

}

module.exports = {
    refreshToken,
    login,
    logout,
    register
};