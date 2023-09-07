const getAllCategorias = async () => {
    return JSON.stringify({ "getAllCategorias": "Obtener todas las categorias" });
}
const getCategoriaById = async () => {
    return JSON.stringify({ "getCategoriaById": "Obtener categoria por Id" });;
}
const createNewCategoria = async () => {
    return JSON.stringify({ "createNewCategoria": "Crear/registrar una nueva categoria" });
}
const updateOneCategoria = async () => {
    return JSON.stringify({ "updateOneCategoria": "Actualizar una categoria" });
}
const deleteOneCategoria = async () => {
    return JSON.stringify({ "deleteOneCategoria": "Eliminar una categoria" });
}

module.exports = {
    getAllCategorias,
    getCategoriaById,
    createNewCategoria,
    updateOneCategoria,
    deleteOneCategoria
};
