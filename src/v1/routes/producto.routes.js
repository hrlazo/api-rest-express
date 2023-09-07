const express = require('express');
const router = express.Router();
const productoController = require("../../controllers/productoController")


router
    .get("/", productoController.getAllProductos )
    .post("/", productoController.createNewProducto)
    .get("/:productoId", productoController.getProductoById)
    .patch("/:productoId", productoController.updateOneProducto)
    .delete("/:productoId", productoController.deleteOneProducto)


module.exports = router;