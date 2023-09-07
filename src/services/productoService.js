const getAllProductos = async () => { 
    return JSON.stringify({ "getAllProductos": "Obtener todos los productos" });
};
const getProductoById = async () => {
    return JSON.stringify({ "getProductoById": "Obtener un producto por Id" });
    };
const createNewProducto = async () => { 
    return JSON.stringify({ "createNewProducto": "Crear/registrar un producto" });
};
const updateOneProducto = async () => { 
    return JSON.stringify({ "updateOneProducto": "Actualizar un producto" });
};
const deleteOneProducto = async () => { 
    return JSON.stringify({ "deleteOneProducto": "Eliminar un productos" });
};

module.exports = {
    getAllProductos,
    getProductoById,
    createNewProducto,
    updateOneProducto,
    deleteOneProducto
};