
const { nanoid } = require("nanoid");
const Link = require("../models/Link.js");
const linkService = require("../services/linkService.js");

const getAllLinks = async (req, res) => {
    try {
        const links = await linkService.getAllLinks(req.uid)
        res.json({ links });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "error en el servidor" });
    }
}

const getLinkById = async (req, res) => {
    try {
        const { id } = req.params;
        const link = await linkService.getLinkById(id);

        if (!link) return res.status(404).json({ error: "No existe el link" })
        if (!link.uid.equals(req.uid)) res.status(401).json({ error: "No esta autorizado." })

        res.status(201).json({ link });

    } catch (error) {
        console.log(error);
        if (error.kind === "ObjectId") return res.status(403).json({ error: "Formato id no valido" });
        return res.status(500).json({ error: "error en el servidor" });
    }
}

const deleteLink = async (req, res) => {
    try {
        const { id } = req.params;
        const link = await linkService.getLinkById(id);

        if (!link) return res.status(404).json({ error: "No existe el link" });
        if (!link.uid.equals(req.uid)) res.status(401).json({ error: "No esta autorizado." });

        const linkEliminado = await linkService.deleteLink(link);

        return res.json({ linkEliminado });

    } catch (error) {
        console.log(error);
        if (error.kind === "ObjectId") return res.status(403).json({ error: "Formato id no valido" });
        return res.status(500).json({ error: "error en el servidor" });
    }
}
const createLink = async (req, res) => {
    try {
        let { longLink } = req.body;
        if (!longLink.startsWith("https://")) {
            longLink = "http://" + longLink;
        }
        const link = new Link({ longLink, nanoLink: nanoid(6), uid: req.uid });
        const newLink = await linkService.createLink(link);

        res.status(201).json({ newLink });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "error en el servidor" });
    }
}

const updateLink = async (req, res) => {
    try {
        const { id } = req.params;
        let { longLink } = req.body;

        if (!longLink.startsWith("https://")) {
            longLink = "http://" + longLink;
        }

        const link = await linkService.getLinkById(id);
        console.log(link.uid)
        console.log(req.uid)
        if (!link) return res.status(404).json({ error: "No existe el link" });
        if (!link.uid.equals(req.uid)) res.status(401).json({ error: "No esta autorizado." });

        const linkActualizado = await linkService.updateLink(link, longLink);
        return res.json({ linkActualizado });

    } catch (error) {
        console.log(error);
        if (error.kind === "ObjectId") return res.status(403).json({ error: "Formato id no valido" });
        return res.status(500).json({ error: "error en el servidor" });
    }
}

module.exports = {
    getAllLinks,
    getLinkById,
    updateLink,
    deleteLink,
    createLink
};
