const categoriaService = require("../services/categoriaService.js")

const getAllCategorias = async (req, res) => {
    const getAllCategorias = await categoriaService.getAllCategorias();
    res.json(getAllCategorias);
}
const getCategoriaById = async (req, res) => {
    const getCategoriaById = await categoriaService.getCategoriaById();
    res.json(getCategoriaById);
}
const createNewCategoria = async (req, res) => {
    const createNewCategoria = await categoriaService.createNewCategoria();
    res.json(createNewCategoria);
}
const updateOneCategoria = async (req, res) => {
    const updateOneCategoria = await categoriaService.updateOneCategoria();
    res.json(updateOneCategoria);
}
const deleteOneCategoria = async (req, res) => {
    await categoriaService.deleteOneCategoria();
    res.json(deleteOneCategoria);
}


module.exports = {
    getAllCategorias,
    getCategoriaById,
    createNewCategoria,
    updateOneCategoria,
    deleteOneCategoria
};
