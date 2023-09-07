const Link = require("../models/Link.js");

const getAllLinks = async uid => {
    try {
        const linksObtenidos = await Link.find({ uid })
        return linksObtenidos;
    } catch (error) {
        console.log(error);
        throw new Error("Error en BD");
    }
}

const getLinkById = async (_id) => {
    try {
        const link = await Link.findById({ _id }).exec()
        return link;
    } catch (error) {
        console.log(error);
        throw new Error("Error en BD");
    }
}

const deleteLink = async ( link ) => {
    try {
        const linkEliminado = await link.deleteOne();
        return linkEliminado;

    } catch (error) {
        console.log(error);
        throw new Error("Error en BD");
    }
}

const createLink = async link => {
    try {
        const linkGuardado = await link.save();
        return linkGuardado;
    } catch (error) {
        console.log(error);
        throw new Error("Error en BD");
    }
}

const updateLink = async (link, longLink) => {
    try {
        link.longLink = longLink
        const linkGuardado = await link.save();
        return linkGuardado;
    } catch (error) {
        console.log(error);
        throw new Error("Error en BD");
    }
}

module.exports = {
    getAllLinks,
    getLinkById,
    updateLink,
    deleteLink,
    createLink
};
