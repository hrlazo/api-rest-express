const User = require("../models/Usuario.js");

const getAllUsuarios = async () => {
    return JSON.stringify({ "getAllUsuario": "Obtener todos los usuarios" });
};
const getUsuarioById = async (uid) => {

    try {
        const user = await User.findById(uid).lean().exec();
        return user;
    } catch (error) {
        console.log(error)
    }

    return JSON.stringify({ "getUsuarioById": "Obtener un usuario por ID" });
};

const createNewUsuario = async (email, password) => {
    // validar que el usuario no exista en la base de datos
    try {
        let userExistence = await User.findOne({ email }).exec();
        if (userExistence) return ({ type: false, status: "error", details: "El usuario ya existe" });

        // Si el usuario no existe generamos la instancia
        let user = new User({ email, password })
        await user.save();
        return ({ user });
    } catch (error) {
        console.log(error);
    }
};

const updateOneUsuario = async () => {
    return JSON.stringify({ "updateOneUsuario": "Actualizar un usuario" });
};
const deleteOneUsuario = async () => {
    return JSON.stringify({ "deleteOneUsuario": "Eliminar un usuario" });
};

const isAvailable = async () => {
    return JSON.stringify({ "isAvailable": "Verificar si el correo esta disponible" });
};

const login = async (email, password) => {
    try {
        // Verificar si el usuario existe dentro de la base de datos
        let user = await User.findOne({ email }).exec();
        if (!user) return ({ status: "error", details: "No existe el usuario" });
        
        // Verificar que las passwords coincidan
        const verificarPassword = await user.comparePassword(password);
        if(!verificarPassword) return ({ status: "error", details: "Las passwords no coinciden" });

        // Si todo esta verificado enviar el objeto usuario
        return (user);

    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllUsuarios,
    getUsuarioById,
    createNewUsuario,
    updateOneUsuario,
    deleteOneUsuario,
    isAvailable,
    login
};