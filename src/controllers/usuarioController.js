const usuarioService = require("../services/usuarioService.js");
const { generateRefreshToken } = require("../utils/tokenManager.js");

const getAllUsuarios = async (req, res) => {
    const getAllusuarios = await usuarioService.getAllUsuarios();
    res.json(getAllUsuarios);
}
const getUsuarioById = async (req, res) => {
    try {
        const user = await usuarioService.getUsuarioById(req.uid);
        if(user === null) return res.status(204).json({ Warning: "El usuario no existe" })
        
        return res.status(201).json({uid: user._id ,email: user.email});

    } catch (error) {
        console.log(error);
        return res.status(500).json({ Error: "Error en servidor" })
    }
}

const updateOneUsuario = async (req, res) => {
    const updateOneusuario = await usuarioService.updateOneUsuario();
    res.json(updateOneusuario);
}
const deleteOneUsuario = async (req, res) => {
    const deleteOneUsuario = await usuarioService.deleteOneUsuario();
    res.json(deleteOneUsuario);
}

module.exports = {
    getAllUsuarios,
    getUsuarioById,
    updateOneUsuario,
    deleteOneUsuario,
};