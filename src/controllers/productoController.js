const productoService = require("../services/productoService.js")

const getAllProductos = async (req, res) => {
    const getAllProductos = await productoService.getAllProductos();
    res.json(getAllProductos);
}
const getProductoById = async (req, res) => {
    const getProductoById = await productoService.getProductoById();
    res.json(getProductoById);
}
const createNewProducto = async (req, res) => {
    const createNewProducto = await productoService.createNewProducto();
    res.json(createNewProducto);
}
const updateOneProducto = async (req, res) => {
    const updateOneProducto = await productoService.updateOneProducto();
    res.json(updateOneProducto);
}
const deleteOneProducto = async (req, res) => {
    const deleteOneProducto = await productoService.deleteOneProducto();
    res.json(deleteOneProducto);
}


module.exports = {
    getAllProductos,
    getProductoById,
    createNewProducto,
    updateOneProducto,
    deleteOneProducto
};
